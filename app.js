var express = require('express');
var path = require('path');
var app = express();

app.set('port',3000);

app.get('/', function(req, res){
  console.log("GET the Homepage.");
  res
    .status("404")
    .sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/json', function(req, res){
  console.log("GET the JSon.");
  res
    .status("200")
    .send({"jsonData": true});
});

app.get('/file', function(req, res){
  console.log("GET the File");
  res
    .status("201")
    .sendFile(path.join(__dirname, 'app.js'));
});


var server = app.listen(app.get('port'), function(){
  var port = server.address().port;
  console.log("Magic is happing on port " + port);
});

console.log("Me first!");
