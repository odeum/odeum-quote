var mongoose = require('mongoose');
var config = require('../config')

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb://${config.keys.userName}:<${config.keys.password}>@quotedb-shard-00-00-xmbu1.mongodb.net:27017,quotedb-shard-00-01-xmbu1.mongodb.net:27017,quotedb-shard-00-02-xmbu1.mongodb.net:27017/test?ssl=true&replicaSet=QuoteDB-shard-0&authSource=admin` , { useMongoClient: true });


module.exports = { mongoose };