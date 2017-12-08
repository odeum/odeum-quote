var config = require('../config')

/*module.exports = function calaculateYearlyPrice(products, callback) {
    //console.log(products)
    var tempPrice = 0
    for (var i = 0; i < products.length; i++) {
        if (products[i].subscription === 'yearly') {
            tempPrice += products[i].price;
        }
        if (products[i].subscription === 'monthly') {
            tempPrice += products[i].price * 12;
        }
        if (products[i].subscription === 'quaterly') {
            tempPrice += products[i].price * 4;
        }
    }
    callback(tempPrice);
}*/ 


const mailer = require('nodemailer');
module.exports = function sendMail(fileName, customerEmail){
    console.log('ctr');
    var smtpTransport = mailer.createTransport({
        service: "Gmail",
        auth: {
            user: config.mail.mail, // generated ethereal user
            pass: config.mail.password  // generated ethereal password
        }
    });

    var mail = {
        from: config.mail.mail,
        to: customerEmail,
        subject: "Send Email Using Node.js",
        text: "Node.js New world for me",
        html: "<b>Node.js New world for me</b>",
        attachments: [
             {   // stream as an attachment
                filename: 'kuku',
                path: `./pdf/${fileName}.pdf`
            }
        ]
    }

    smtpTransport.sendMail(mail, function(error, response){
        if(error){
            console.log(error);
        }else{
            console.log("Message sent: " + response.message);
        }
    
        smtpTransport.close();
    });
}

