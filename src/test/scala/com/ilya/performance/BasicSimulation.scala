package com.ilya.performance

import io.gatling.core.Predef._
import io.gatling.core.scenario.Simulation
import io.gatling.http.Predef._

import scala.concurrent.duration.DurationInt

class BasicSimulation extends Simulation {

  //http configuration
  val httpConf = http.baseUrl("https://www.pdffiller.com/")
    .header("Accept", "application-json")
    .header("content-type", "application-json")
    .header("User-Agent", "test-load")

  //scenario
  val userScn1 =
    scenario("Get user on the main page")
      .exec(
        http("Get user request")
          .get("")
          .check(status is 200)
          .check(substring("userId").saveAs("userId")))
      .exec(session => {
        print("User ID: ")
        println(session("userId").as[String])
        session
      })

  val userScn2 =
    scenario("Get user on the support page")
      .exec(
        http("Get user request")
          .get("en/support.htm")
          .check(status is 200)
      )

  val userScn3 =
    scenario("Get user on the features page")
      .exec(
        http("Get user request")
          .get("en/features.htm")
          .check(status is 200)
      )


  //setup
  setUp(userScn1.inject(rampUsersPerSec(0).to(1).during(30), constantUsersPerSec(1).during(1.minutes), nothingFor(30), constantUsersPerSec(1).during(1.minutes)),
    userScn2.inject(rampUsersPerSec(0).to(1).during(30), constantUsersPerSec(1).during(1.minutes), nothingFor(30), constantUsersPerSec(1).during(1.minutes)),
    userScn3.inject(rampUsersPerSec(0).to(1).during(30), constantUsersPerSec(1).during(1.minutes), nothingFor(30), constantUsersPerSec(1).during(1.minutes))).protocols(httpConf)

}
