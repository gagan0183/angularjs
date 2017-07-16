var path = require('path');
var express = require('express');
var app = express();
var messages = require('./messages');

app.use(express.static(path.join(__dirname + '/')));

app.get('/messages', function(req, res) {
    res.send(messages());
});

app.get('/messages/:id', function(req, res) {
    res.send(messages()[req.params.id]);
});

app.listen(9000);
console.log('server running at 9000')