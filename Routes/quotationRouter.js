var express = require("express");
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var router = express.Router();
var {Quotation} = require('../Model/quotation');

module.exports = router;

router.get('/quotations', (req, res) => {
    Quotation.find().then((quotation) => {
        res.send({ quotation });
    }, (e) => {
        res.status(400).send(e);
    });
}); 

router.post('/post', (req, res) => {
    var quotation = new Quotation(req.body);
    quotation.save().then((doc) => {
      res.send(doc);
    }, (e) => {
      res.status(400).send(e);
    });
  });

