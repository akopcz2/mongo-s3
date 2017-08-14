exports.start(function(){
    let shell = require('shelljs');
    shell.config.silent = true;
    shell.exec('cd lib');
    shell.exec('node backup.js');
});




