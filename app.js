var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors')
var { mongoose } = require('./MongoDb/connection');
var productRoute = require('./Routes/productRoute');
var quotationRoute = require('./Routes/quotationRouter'); 


const port = process.env.PORT || 3000;
app.use(bodyParser.json());

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', '*');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', '*');

  // Pass to next layer of middleware
  next();
});


app.use('/quotation/', quotationRoute);
app.use('/product/', productRoute);


app.listen(port, () => {
  console.log(`the server is running ${port} `);
}); 

module.exports = app