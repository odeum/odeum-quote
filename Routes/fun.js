/*global.window = {document: {createElementNS: () => {return {}} }};
global.navigator = {};
global.btoa = () => {};

var fs = require('fs');
var jsPDF = require('jspdf');

/*print(){

}*/

var doc = new jsPDF();
doc.text("Hello", 10, 10);
var data = doc.output();

fs.writeFileSync("../pdfs/tessdfsdft.pdf", data);

delete global.window;
delete global.navigator;
delete global.btoa;