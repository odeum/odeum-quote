var config = require('../config')

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
        //Setting default Email
        to: 'quote@odeumcode.com',
        subject: "Tilbud fra WebHouse ApS",
        text: "Tilbud er vedlagt",
        html: "<b>Tilbud er vedlagt</b>",
        attachments: [
             {   // stream as an attachment
                filename: 'Tilbud.pdf',
                contentType: 'application/pdf',
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

