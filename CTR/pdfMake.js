var pdfMake = require('pdfmake');
var fs = require('fs');
var image = require('../img/data')

var fonts = {
    Roboto: {
        normal: './fonts/Roboto-Regular.ttf',
        bold: './fonts/Roboto-Medium.ttf',
        italics: './fonts/Roboto-Italic.ttf',
        bolditalics: './fonts/Roboto-Italic.ttf'
    }
};

// const numberWithCommas = (x) => {
//     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//   }
 convertPriceToEu = (number) => {
    var newConvertPrice = Number(number).toLocaleString("es-ES", { minimumFractionDigits: 2 });
    return newConvertPrice; 
}

var printer = new pdfMake(fonts);

createPdf = (date, companyName, customerFirstName, customerLastName, customerAdress,
    customerZip, customerCity, salesPersonName, companyContactName, companyEmail, companyPhone, products, totalPrice, description, callback) => {
    var title
    var description
    description.map((item) => {
        return (title = item.title,
            description = item.description
        )
    })
    var bodyData = []
    var productName
    var productDescription
    var productPrice
    bodyDataHeader =  [{ text: 'Produkt', bold: true }, { text: 'Beskrivelse af produkt', bold: true }, { text: 'Pris', alignment: 'right', bold: true }];
    bodyData.push(bodyDataHeader);
    products.map((item) => {
        var dataRow= [];
        var newPrice = convertPriceToEu(item.price)
        console.log(item)
        dataRow.push(item.name);
        dataRow.push(item.description);
        dataRow.push({text: newPrice, alignment: 'right'});
        bodyData.push(dataRow)
    })
    //bodyData.push(['Samlet pris', '', ({text: totalPrice, alignment: 'right'})])
    console.log(bodyData)
    
    var pdfStyle = {
        header: {
            // you'll most often use dataURI images on the browser side
            // if no width/height/fit is provided, the original size will be used
            image: image,
            width: 115,
            height: 110,
            alignment: 'right',
            margin: [37, 0, 0, 0]
        },

        footer: {
            columns: [
                { text: 'WebHouse ApS · Kong Christians Alle 37 · DK-9000 Aalborg · Tel.: +45 96 30 30 72 · info@webhouse.dk · www.webhouse.dk · CVR: 21221198', alignment: 'center', fontSize: 7.5 }
            ]
        },



        content: [
            { text: `${companyName}`, margin: [20, 30, 0, 0] },
            { text: `${customerFirstName}` + `${customerLastName}`, margin: [20, 0, 0, 0] },
            { text: `${customerAdress}`, margin: [20, 0, 0, 0] },
            { text: `${customerZip}` + `${customerCity}`, margin: [20, 0, 0, 0] },

            { text: `Aalborg, ${date}`, alignment: 'right' },

            { text: `${title}`, fontSize: 20, margin: [20, 80, 0, 10], bold: true },
            { text: `${description}`, margin: [20, 0, 0, 20] },

            { text: 'Med venlig hilsen', absolutePosition: { x: 65, y: 645 } },
            { text: `${salesPersonName}`, absolutePosition: { x: 65, y: 660 }, bold: true },
            { text: `${companyContactName}`, absolutePosition: { x: 65, y: 675 }, bold: true },
            { text: `${companyEmail}`, absolutePosition: { x: 65, y: 690 } },
            { text: `${companyPhone}`, absolutePosition: { x: 65, y: 705 }, pageBreak: 'after' },

            { text: 'Produkt oversigt', fontSize: 20, margin: [0, 80, 0, 20], bold: true },

            {
                //The table
                layout: 'lightHorizontalLines', // optional
                style: 'tableExample',
                table: {
                    // headers are automatically repeated if the table spans over multiple pages
                    // you can declare how many rows should be treated as headers
                    headerRows: 1,
                    widths: ['*', '*', '*'],

                    body: bodyData

                },
                styles: {
                    tableExample: {
                        margin: [15, 100, 0, 15]
                    },
                }
            }
        ]
    };

    var pdfDoc = printer.createPdfKitDocument(pdfStyle);
    pdfDoc.pipe(fs.createWriteStream(`./pdf/${title}.pdf`)).on('finish', function () {
        //success
        return callback
    });

    pdfDoc.end();
    
}
module.exports = { createPdf }
