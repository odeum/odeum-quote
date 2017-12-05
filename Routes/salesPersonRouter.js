var express = require("express");
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var router = express.Router();

var {SalesPerson} = require('../Model/salesPerson');

module.exports = router;

router.get('/get', (req, res) => {
    //var id = ''
    SalesPerson.findOne({'contactPerson': 'Christian broberg'}).then((salesperson) => {
        res.send({salesperson});
    }, (e) => {
        res.status(400).send(e);
    });
}); 
