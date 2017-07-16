var express = require('express');
var app = express();
var path = express(path);
app.use(express.static(__dirname + '/app'));
app.listen(9000);
console.log("Server is listening on 9000");