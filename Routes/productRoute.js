var express = require("express");
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var router = express.Router();

var {Products} = require('../Model/products')

module.exports = router;

router.get('/products', (req, res) => {
    Products.find().then((products) => {
        res.send({ products });
    }, (e) => {
        res.status(400).send(e);
    })
})
