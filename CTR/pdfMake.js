var pdfMake = require('pdfmake');
var fs = require('fs');
var image = require('../img/data')

var fonts = {
    Roboto: {
        normal: './fonts/Roboto-Regular.ttf',
        bold: './fonts/Roboto-Medium.ttf',
        italics: './fonts/Roboto-Italic.ttf',
        bolditalics: './fonts/Roboto-MediumItalic.ttf'
    }
};

convertPriceToEu = (number) => {
    var newConvertPrice = Number(number).toLocaleString("es-ES", { minimumFractionDigits: 2 });
    return newConvertPrice;
}

var printer = new pdfMake(fonts);

createPdf = (date, companyName, customerEmail, customerFirstName, customerLastName, customerAdress,
    customerZip, customerCity, salesPersonName, companyContactName, companyEmail, companyPhone, products, totalPrice, description, callback) => {

    //The title and description
    var title
    var description
    description.map((item) => {
        return (title = item.title,
            description = item.description
        )
    })

    //The table data
    var bodyData = []
    var productName
    var productDescription
    var productPrice

    bodyDataHeader = [{ text: 'Produkt', bold: true }, { text: 'Beskrivelse af produkt', bold: true }, { text: 'Pris', alignment: 'right', bold: true }];
    bodyData.push(bodyDataHeader);

    products.map((item) => {
        var dataRow = [];
        var newPrice = convertPriceToEu(item.price)
        dataRow.push(item.name);
        dataRow.push(item.description);
        dataRow.push({ text: newPrice, alignment: 'right' });
        bodyData.push(dataRow)
    })
    //Last row of the table, that shows the total price
    bodyData.push(['Samlet pris', '', ({ text: totalPrice, alignment: 'right' })])

    //Styling the PDF file
    var pdfStyle = {
        //The fixed header
        header: {
            image: image,
            width: 115,
            height: 110,
            alignment: 'right',
            margin: [37, 0, 0, 0]
        },

        //The fixed footer
        footer: {
            columns: [
                { text: 'WebHouse ApS · Kong Christians Alle 37 · DK-9000 Aalborg · Tel.: +45 96 30 30 72 · info@webhouse.dk · www.webhouse.dk · CVR: 21221198', alignment: 'center', fontSize: 7.5 }
            ]
        },

        //The content of the PDF
        content: [
            //Customer information
            { text: `${companyName}`, margin: [20, 30, 0, 0] },
            { text: `${customerFirstName}` + ' ' + `${customerLastName}`, margin: [20, 0, 0, 0] },
            { text: `${customerAdress}`, margin: [20, 0, 0, 0] },
            { text: `${customerZip}` + ' ' + `${customerCity}`, margin: [20, 0, 0, 0] },

            //The date, the quote was created
            { text: `Aalborg, ${date}`, alignment: 'right' },

            { text: `${title}`, fontSize: 20, margin: [20, 80, 0, 10], bold: true },
            { text: `${description}`, margin: [20, 0, 0, 20] },

            //Sales person information
            { text: 'Med venlig hilsen', absolutePosition: { x: 65, y: 645 } },
            { text: `${salesPersonName}`, absolutePosition: { x: 65, y: 660 }, bold: true },
            { text: `${companyContactName}`, absolutePosition: { x: 65, y: 675 }, bold: true },
            { text: `Email: ${companyEmail}`, absolutePosition: { x: 65, y: 690 } },
            { text: `Telefon: ${companyPhone}`, absolutePosition: { x: 65, y: 705 }, pageBreak: 'after' }, //pageBreak: 'after' means that the next content starts on the next page

            //NEXT PAGE
            //Headline for the table
            { text: 'Produkt oversigt', fontSize: 20, margin: [0, 80, 0, 20], bold: true },

            {
                //The table style
                layout: 'lightHorizontalLines',
                style: 'tableExample',
                table: {
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

    //Creates the PDF
    var pdfDoc = printer.createPdfKitDocument(pdfStyle);
    pdfDoc.pipe(fs.createWriteStream(`./pdf/${title}.pdf`)).on('finish', function () {
        //success
    });

    callback(pdfDoc.end());

}
module.exports = { createPdf }