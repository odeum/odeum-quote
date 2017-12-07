var express = require("express");
var router = express.Router();
var sendMail = require('../CTR/controller')
var pdf = require('html-pdf');
var options = { format: 'text/html'}
var {createPdf} = require('../CTR/pdfMake')
var {createPdf2} = require('../CTR/pdfKit')



module.exports = router;

router.post('/post/:name/:email', (req, res) => {
    pdf.create(req.body, options).toFile(`./pdfs/${req.params.name}.pdf`, function(err, res){
        if(err) return console.log(err);
        console.log(res);
        sendMail(req.params.name, req.params.email)
    });
    res.send(pdf);
})


router.post('/postPdf/', (req,res) => {
    var date = req.body.date
    var companyName = req.body.customerName
    var customerFirstName = req.body.customerContactFirstName
    var customerLastName = req.body.customerContactLastName
    var customerAdress = req.body.customerOrgAddress
    var customerZip = req.body.customerOrgZip
    var customerCity = req.body.customerOrgCity

    var salesPersonName = req.body.companyName
    var companyContactName = req.body.contactPerson
    var companyEmail = req.body.email
    var companyPhone = req.body.phone

    var products = req.body.product
    var totalPrice = req.body.totalPrice
    /*
    kunde: virksomhenavn, concatcPerson,emaifls, tlf
    date: 
    webHouse: navn, concatkperson, email, phone
    produkt: navn, beskrivelse, price. totalpris 
    */
    console.log('req', req.body)
    createPdf(date, companyName, customerFirstName, customerLastName, customerAdress, 
        customerZip,customerCity, salesPersonName, companyContactName, companyEmail, companyPhone, products, totalPrice );
    res.send('kuku');  
})
