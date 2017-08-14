let shell = require('./shellHelper');
let fs = require('fs');
require('dotenv').config()
let database = process.env.MONGO_URI;
database = database.split('/').pop();
shell.series([
    `mongodump --db ${database}`,
    `zip -r ${database}.zip dump`,
    'node s3',
    'rm -rf dump',
    `rm -rf ${database}.zip`
    
], function(err){
    if(err){
        console.log(err);
    }
});
