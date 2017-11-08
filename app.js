var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var { mongoose } = require('./MongoDb/connection');


const port = process.env.PORT || 3000;
app.use(bodyParser.json());


app.listen(port, () => {
  console.log(`the server is running ${port} `);
}); 

