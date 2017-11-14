var config = require('../config');
var mongoose = require('mongoose');
var db = process.env.NODE_ENV.trim();
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${config.keys.userName}:${config.keys.password}@quotedb-shard-00-00-xmbu1.mongodb.net:27017,quotedb-shard-00-01-xmbu1.mongodb.net:27017,quotedb-shard-00-02-xmbu1.mongodb.net:27017/${db}?ssl=true&replicaSet=QuoteDB-shard-0&authSource=admin` , { useMongoClient: true });

module.exports = { mongoose };