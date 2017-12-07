PDFDocument = require('pdfkit')
var fs = require('fs');

function formatDate(date) {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd
  }

  if (mm < 10) {
    mm = '0' + mm
  }

  return today = 'Aalborg, ' + dd + '/' + mm + '/' + yyyy;
}

const doc = new PDFDocument
doc.pipe(fs.createWriteStream('./Tilbud.pdf'))

//The logo
doc.image('../img/logo.png', 427, doc.page.height - 800, {
  fit: [130, 130]
});

//The date
doc.text(formatDate(), 427, 150)

//The customer
doc.text('Virksomhed', 70, 80)
doc.text('Kontaktperson', 70, 95)
doc.text('Email', 70, 110)
doc.text('Telefon', 70, 125)

//The title
doc.fontSize(20)
doc.text('Titel', 70, 275)

//The description
doc.fontSize(12)
doc.text('Beskrivelse', 70, 300)

//The salesperson
doc.text('Med venlig hilsen', 70, 580)
doc.text('WebHouse ApS', 70, 595)
doc.text('Christian Broberg', 70, 610)
doc.text('Email:', 70, 625)
doc.text('Telefon:', 70, 640)

//The footer
var footer = "WebHouse ApS · Kong Christians Alle 37 · DK-9000 Aalborg · Tel.: +45 96 30 30 72 · info@webhouse.dk · www.webhouse.dk · CVR: 21221198"
doc.fontSize(7.5);
doc.text(footer, 60, 710);

//SECOND PAGE
doc.addPage()

//The logo
doc.image('../img/logo.png', 427, doc.page.height - 800, {
  fit: [130, 130]
});

//The title of the table
doc.fontSize(20)
doc.text('Produkt oversigt', 70, 110)

//Set the font size back to normal
doc.fontSize(12)

//The table
doc.text('The table is supposed to be here', 70, 140)

//The footer
doc.fontSize(7.5);
doc.text(footer, 60, 710);

//What is this?
doc.save()

doc.scale(0.6)
  .translate(470, -380)
  .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
  .fill('red', 'even-odd')
  .restore()

doc.end()