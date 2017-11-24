var express = require("express");
var router = express.Router();

var pdf = require('html-pdf');
var options = { format: 'text/html'}


module.exports = router;

router.post('/post/:name', (req, res) => {
    console.log(req.body)
    pdf.create(req.body, options).toFile(`./pdfs/${req.params.name}.pdf`, function(err, res){
        if(err) return console.log(err);
        console.log(res);
    });
    res.send(pdf);
})
