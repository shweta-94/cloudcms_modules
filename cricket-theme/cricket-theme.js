define(function(require, exports, module) {

    var moduleId = module.uri.match(/^.*(_modules[^\/]+)\/.*$/)[1];
    require("css!/"+ moduleId + "/cricket/cricket-theme.css");

    // require("css!bootstrap/../../css/bootstrap.css");
    // require("css!app/../../main.css");

    // require("css!themes/theme-reset.css");
    // require("css!./theme.css");
    
});