## Mongo-s3
Backup your mongo database to s3
Runs off sync shelljs commands


###Usage

Will work with any project that is referencing mongodb from an envFile
for example
```javascript
MONGO_URI=mongodb://localhost/test
```

Fill in your S3 Details in your .env
```javascript
ACCESS_KEY: Your Access Key
SCRECT_KEY: Your secret Key
BUCKET: your s3 bucket
```

use as an npm script
i.e npm run backup
