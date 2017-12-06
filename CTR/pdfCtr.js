var fs = require('fs');
var pdf = require('html-pdf');
var path = require('path');
var imgSrc = 'file://' + __dirname + '/../img/logo.png';
imgSrc = path.normalize(imgSrc);
console.log(imgSrc + " ddddd")
var options = {
    format: 'Letter', "header": {
        "height": "45mm",
        "contents": ""
    }
};


console.log(imgSrc + " ddddd")
var result = "<div id='pageHeader'><img src='" + imgSrc + "' /><div style='text-align: center;'>Author: Marc Bachmann</div></div>";
result += "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>";


fs.unlink('./businesscard.html', function () {
    console.log(imgSrc + " ddddd")
    console.log('hje')
})
//var html = fs.readFileSync('../html/businesscard.html', 'utf8');
pdf.create(result, options).toFile('./businesscard.pdf', function (err, res) {
     if (err) return console.log(err);
    console.log(res); // { filename: '/app/businesscard.pdf' }
});


/*
// this is very important, you have to put file:// before your path
// and normalize the resulting path
var imgSrc = 'file://' + __dirname + '/350x120.png';
imgSrc = path.normalize(imgSrc);
// or var imgSrc = path.join('file://', __dirname, '/350x120.png');

// Options
var options = {
    "header": {
      "height": "45mm",
      "contents": ""
    },
    "footer": {
      "height": "28mm",
      "contents": "<span style='color: #444;'>{{page}}</span>/<span>{{pages}}</span>"
    }
  }
// put your entire header here and the content of the page outside the <div id="pageHeader"></div>
var result = "<div id='pageHeader'><img src='" + imgSrc + "' /><div style='text-align: center;'>Author: Marc Bachmann</div></div>";
result += "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>";
var fileName = __dirname + '/test.pdf';
pdf.create(result, options).toFile(fileName, function(err, res) {
  if (err) {
    console.error(err);
  }
*/