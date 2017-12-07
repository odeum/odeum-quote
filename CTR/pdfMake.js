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
var printer = new pdfMake(fonts);

createPdf = (date) => {
   
    console.log('pdfmake is trigged')
    /*printer.tableLayouts = {
        exampleLayout: {
          hLineWidth: function (i, node) {
            if (i === 0 || i === node.table.body.length) {
              return 0;
            }
            return (i === node.table.headerRows) ? 2 : 1;
          },
          vLineWidth: function (i) {
            return 0;
          },
          hLineColor: function (i) {
            return i === 1 ? 'black' : '#aaa';
          },
          paddingLeft: function (i) {
            return i === 0 ? 0 : 8;
          },
          paddingRight: function (i, node) {
            return (i === node.table.widths.length - 1) ? 0 : 8;
          }
        }
      };*/
    
    var dd = {
        header: {
            // you'll most often use dataURI images on the browser side
            // if no width/height/fit is provided, the original size will be used
            image: image,
            width: 90,
            height: 100,
            alignment: 'right',
            margin: [30, 0, 0, 0]
        },
    
        footer: {
            columns: [
                { text: 'WebHouse ApS · Kong Christians Alle 37 · DK-9000 Aalborg · Tel.: +45 96 30 30 72 · info@webhouse.dk · www.webhouse.dk · CVR: 21221198', alignment: 'center', fontSize: 7 }
            ]
        },
    
        content: [
            {
                layout: 'lightHorizontalLines', // optional
                style: 'tableExample',
                table: {
                    // headers are automatically repeated if the table spans over multiple pages
                    // you can declare how many rows should be treated as headers
                    headerRows: 1,
                    widths: [100, 100, 100, 100],
                
                    body: [
                        ['First', 'Second', 'Third', 'The last one'],
                        ['Value 1', 'Value5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555 2', 'Value 3', 'Value 4'],
                        ['val 1', `${date}`, 'Vaggffgfgfgfgfgfgfgl 3', 'Val 4']
                    ]
                }
            }
        ],
        styles: {
            tableExample: {
                margin: [15, 100, 0, 15]
            },
        }
    };
    var pdfDoc = printer.createPdfKitDocument(dd);
    pdfDoc.pipe(fs.createWriteStream('basics.pdf')).on('finish', function () {
        //success
    });
    pdfDoc.end();
}
//createPdf();
module.exports={createPdf}
