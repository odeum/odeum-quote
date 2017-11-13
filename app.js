var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var { mongoose } = require('./MongoDb/connection');
var productRoute = require('./Routes/productRoute');
var quotationRoute = require('./Routes/quotationRouter'); 


const port = process.env.PORT || 3000;
app.use(bodyParser.json());

app.use('/quotation/', quotationRoute);
app.use('/product/', productRoute);


app.listen(port, () => {
  console.log(`the server is running ${port} `);
}); 

module.exports = app