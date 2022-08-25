var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "405",
        "ok": "405",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "252",
        "ok": "252",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "954",
        "ok": "954",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "362",
        "ok": "362",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "87",
        "ok": "87",
        "ko": "-"
    },
    "percentiles1": {
        "total": "350",
        "ok": "350",
        "ko": "-"
    },
    "percentiles2": {
        "total": "386",
        "ok": "386",
        "ko": "-"
    },
    "percentiles3": {
        "total": "501",
        "ok": "501",
        "ko": "-"
    },
    "percentiles4": {
        "total": "769",
        "ok": "769",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 401,
    "percentage": 99
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 4,
    "percentage": 1
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.341",
        "ok": "2.341",
        "ko": "-"
    }
},
contents: {
"req_get-user-reques-ef4b4": {
        type: "REQUEST",
        name: "Get user request",
path: "Get user request",
pathFormatted: "req_get-user-reques-ef4b4",
stats: {
    "name": "Get user request",
    "numberOfRequests": {
        "total": "405",
        "ok": "405",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "252",
        "ok": "252",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "954",
        "ok": "954",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "362",
        "ok": "362",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "87",
        "ok": "87",
        "ko": "-"
    },
    "percentiles1": {
        "total": "350",
        "ok": "350",
        "ko": "-"
    },
    "percentiles2": {
        "total": "386",
        "ok": "386",
        "ko": "-"
    },
    "percentiles3": {
        "total": "501",
        "ok": "501",
        "ko": "-"
    },
    "percentiles4": {
        "total": "769",
        "ok": "769",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 401,
    "percentage": 99
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 4,
    "percentage": 1
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.341",
        "ok": "2.341",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
