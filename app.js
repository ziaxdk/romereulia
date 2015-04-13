var path = '/dist/amd/index';
// var deps = ["aurelia-bootstrapper", "aurelia-dependency-injection","aurelia-binding","aurelia-metadata","aurelia-templating","aurelia-loader","aurelia-task-queue","aurelia-logging","aurelia-path", "aurelia-framework", "aurelia-logging-console", "core-js"];
var deps = ["aurelia-bootstrapper",
"aurelia-loader",
"aurelia-loader-systemjs",
"aurelia-binding",
"aurelia-dependency-injection",
"aurelia-event-aggregator",
"aurelia-framework",
"aurelia-history",
"aurelia-history-browser",
"aurelia-html-template-element",
"aurelia-http-client",
"aurelia-loader",
"aurelia-logging",
"aurelia-logging-console",
"aurelia-metadata",
"aurelia-path",
"aurelia-router",
"aurelia-route-recognizer",
"aurelia-task-queue",
"aurelia-templating",
"aurelia-templating-binding",
"aurelia-templating-resources",
"aurelia-templating-router"
];

requirejs.config({
    baseUrl: 'bower_components',
    paths: _.assign(
      {},
      _.reduce(deps, function(result, n, key) { result[n] = n + path; return result; }, {}),
      {
        "core-js": "core-js/client/core",
        "webcomponents": "webcomponentsjs/webcomponents"
      })
    // paths: {
    //   "core-js": "core-js/client/core",
    //   "aurelia-bootstrapper": "aurelia-bootstrapper/dist/amd/index",
    //   "aurelia-framework": "aurelia-framework/dist/amd/index",
    //   "aurelia-logging-console": "aurelia-logging-console/dist/amd/index",
    //   "aurelia-logging": "aurelia-logging/dist/amd/index",
    //   "aurelia-dependency-injection": "aurelia-dependency-injection/dist/amd/index",
    //   "aurelia-binding": "aurelia-binding/dist/amd/index",
    //   "aurelia-metadata": "aurelia-metadata/dist/amd/index",
    //   "aurelia-templating": "aurelia-templating/dist/amd/index"
    // }
});


requirejs(['aurelia-bootstrapper']);