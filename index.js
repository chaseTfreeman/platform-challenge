var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Get Request from Homepage');
});

app.post('/', function(req, res){
  res.send('Post Request to Homepage')
})

app.listen(9999, function () {
  console.log('Example app listening on port 9999!');
});

module.exports = app;
