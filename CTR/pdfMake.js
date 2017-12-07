var pdfMake = require('pdfmake');
var fs = require('fs');
var image = require('../img/data')
var fonts = {
    Roboto: {
        normal: '../fonts/Roboto-Regular.ttf',
        bold: '../fonts/Roboto-Medium.ttf',
        italics: '../fonts/Roboto-Italic.ttf',
        bolditalics: '../fonts/Roboto-Italic.ttf'
    }
};

var printer = new pdfMake(fonts);

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
      }
    }
  };*/

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
        { text: 'Virksomhed', margin: [ 20, 30, 0, 0 ] },
        { text: 'Kontaktperson', margin: [ 20, 0, 0, 0 ]},
        { text: 'Email', margin: [ 20, 0, 0, 0 ]},
        { text: 'Telefon', margin: [ 20, 0, 0, 0 ]},

        { text: `Aalborg, 12/07/2017`, alignment: 'right' },

        { text: 'Titel på tilbud', fontSize: 20, margin: [ 20, 80, 0, 20 ] },
        { text: 'The domestic cat[1][5] (Felis silvestris catus or Felis catus) is a small, typically furry, carnivorous mammal. They are often called house cats when kept as indoor pets or simply cats when there is no need to distinguish them from other felids and felines.', margin: [ 20, 5, 0, 20 ]},

        { text: 'Webhouse ApS', absolutePosition: {x:65, y:660} },
        { text: 'Christian Broberg', absolutePosition: {x:65, y:675} },
        { text: 'Kong Christians Alle 37', absolutePosition: {x:65, y:690} },
        { text: '9000 Aalborg', absolutePosition: {x:65, y:705}, pageBreak: 'after' },

        {
            //The table
            layout: 'lightHorizontalLines', // optional
            style: 'tableExample',
            table: {
                // headers are automatically repeated if the table spans over multiple pages
                // you can declare how many rows should be treated as headers
                headerRows: 1,
                widths: ['*', '*', '*'],
            
                body: [
                    ['Produkt', 'Beskrivelse af produkt', 'Pris'],
                    ['Value 1', 'Value 2', 'Value 3'],
                    ['val 1', 'Val 2', 'Val 3']
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

var pdfDoc = printer.createPdfKitDocument(pdfStyle);
pdfDoc.pipe(fs.createWriteStream('basics.pdf')).on('finish', function () {
    //success
});

pdfDoc.end();