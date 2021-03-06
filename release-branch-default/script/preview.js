define(function(require, exports, module) {
    var $ = require("jquery");
    $(document).ajaxStop(function() {
        //Check workspace-picker to determine the appropriate env for creating the preview link.
        var workspacePickerVal = $('select.workspace-picker option:selected').text();
        var domain;
        //Decide on the correct environment
        if (workspacePickerVal.includes("Master")) {
            //console.log("prod");
            domain = "https://www.cricketwireless.com";
        } else if (workspacePickerVal.includes("SIT1")) {
            //console.log("SIT1");
            domain = "https://wwwsit1.cricketwireless.com";
        } else if (workspacePickerVal.includes("SIT2")) {
            //console.log("SIT2");
            domain = "https://wwwsit2.cricketwireless.com";
        } else if (workspacePickerVal.includes("SIT3")) {
           //console.log("SIT3");
            domain = "https://wwwsit3.cricketwireless.com";
        } else if (workspacePickerVal.includes("SIT6")) {
            //console.log("SIT6");
            domain = "https://wwwsit6.cricketwireless.com";
        } else if (workspacePickerVal.includes("SIT8")) {
            //console.log("SIT8");
            domain = "https://wwwsit8.cricketwireless.com";
        } else if (workspacePickerVal.includes("SIT9")) {
            //console.log("SIT9");
            domain = "https://wwwsit9.cricketwireless.com";
        } else {
            console.log("Nothing found");
        }

        //Must delay for page render after ajax finishes. 
        setTimeout(function() {
            var endPoint = $('div[name=previewURL]').text();
            //console.log(endPoint);
            if(endPoint.length > 0) $('div[name=previewURL]').append(' - <a href="'+domain+endPoint+'" target="_blank">Preview</a>');
        }, 2000);
    });
});