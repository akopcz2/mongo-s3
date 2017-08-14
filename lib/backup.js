let shell = require('shelljs');
let shellHelper = require('./lib/shellHelper');
let fs = require('fs');
shell.config.silent = true;
require('dotenv').config()

let database = process.env.MONGO_URI;
database = database.split('/').pop();
shellHelper.series([
    `mongodump --db ${database}`,
    `zip -r ${database}.zip dump`,
    'cd lib',
    'node s3',
    'rm -rf dump',
    `rm -rf ${database}.zip`
    
], function(err){
    if(err){
        console.log(err);
    }
});
