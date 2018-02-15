define(function(require, exports, module) {

    var UI = require("ui");
    var moduleId = module.uri.match(/^.+(_modules[^\/]+)\/.*/)[1];
    console.log("moduleID in the porgram" + moduleId);
    // register the theme: "cricket"
    UI.registerTheme({
        "key": "cricket",
        "title": "Cricket",
        "module": "/"+ moduleId + "/cricket-theme.js"
    });

});