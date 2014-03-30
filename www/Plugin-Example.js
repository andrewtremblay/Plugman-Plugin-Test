var exec = require('cordova/exec');

exports.coolMethod = function(arg0, success, error) {
    exec(success, error, "Plugin-Example", "coolMethod", [arg0]);
};
