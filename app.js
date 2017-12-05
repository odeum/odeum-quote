var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors')
var { mongoose } = require('./MongoDb/connection');
var productRoute = require('./Routes/productRouter');
var quotationRoute = require('./Routes/quotationRouter'); 
var salespersonRoute = require('./Routes/salesPersonRouter'); 
var pdfRoute = require('./Routes/pdfRouter')


const port = 8080;
app.use(bodyParser.json());

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', '*');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', '*');

  // Pass to next layer of middleware
  next();
});


app.use('/api/quotation/', quotationRoute);
app.use('/api/product/', productRoute);
app.use('/api/pdf/', pdfRoute);
app.use('/api/salesperson', salespersonRoute)

app.listen(port, () => {
  console.log(`the server is running ${port} `);
}); 

module.exports = app