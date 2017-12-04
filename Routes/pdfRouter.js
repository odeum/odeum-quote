var express = require("express");
var router = express.Router();
var sendMail = require('../CTR/controller')
var pdf = require('html-pdf');
var options = { format: 'text/html'}


module.exports = router;

router.post('/post/:name/:email', (req, res) => {
    pdf.create(req.body, options).toFile(`./pdfs/${req.params.name}.pdf`, function(err, res){
        if(err) return console.log(err);
        console.log(res);
        sendMail(req.params.name, req.params.email)
    });
    res.send(pdf);
})
