var express = require('express');
var path = require('path');
var open = require('open');

var port = 9000;
var app = express();

app.use(function(req, res, next) {
  req.getUrl = function() {
    return req.protocol + "://" + req.get('host') + req.originalUrl;
  }
  console.log(req.getUrl());
  return next();
});

app.use(express.static(path.join(__dirname + '/../src')));

app.get('/', function(req,res){
  res.sendFile(path.join(__dirname, '../index.html'));
});

console.log(path.join(__dirname + '/../src'));
app.listen(port, function(err){
if(err){
  console.log(err);
}
else{
  open("http://localhost:"+ port, "chrome");
}
});
