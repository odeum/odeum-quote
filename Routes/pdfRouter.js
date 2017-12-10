
var express = require("express");
var router = express.Router();
var sendMail = require('../CTR/controller')
var { createPdf } = require('../CTR/pdfMake')



module.exports = router;

router.post('/post/:name/:email', (req, res) => {
    var date = req.body.date
    var companyName = req.body.customerName
    var customerFirstName = req.body.customerContactFirstName
    var customerEmail = req.body.customerEmail
    var customerLastName = req.body.customerContactLastName
    var customerAdress = req.body.customerOrgAddress
    var customerZip = req.body.customerOrgZip
    var customerCity = req.body.customerOrgCity

    var description = req.body.description

    var salesPersonName = req.body.companyName
    var companyContactName = req.body.contactPerson
    var companyEmail = req.body.email
    var companyPhone = req.body.phone
    var products = req.body.product
    var totalPrice = req.body.totalPrice
    createPdf(date, companyName, customerEmail, customerFirstName, customerLastName, customerAdress,
        customerZip, customerCity, salesPersonName, companyContactName, companyEmail, companyPhone, products, totalPrice, description, function(){
            sendMail(req.params.name, req.params.email)
        })


    res.send('der er sent en pdf');
})


router.post('/postPdf/', (req, res) => {
    var date = req.body.date
    var companyName = req.body.customerName
    var customerFirstName = req.body.customerContactFirstName
    var customerLastName = req.body.customerContactLastName
    var customerAdress = req.body.customerOrgAddress
    var customerZip = req.body.customerOrgZip
    var customerCity = req.body.customerOrgCity

    var description = req.body.description

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
    //console.log('req', req.body)
    createPdf(date, companyName, customerFirstName, customerLastName, customerAdress,
        customerZip, customerCity, salesPersonName, companyContactName, companyEmail, companyPhone, products, totalPrice, description);
    res.send('kuku');
})
