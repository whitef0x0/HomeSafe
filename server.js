var express = require("express");
var bodyParser = require('body-parser');
var morgan = require('morgan')
var mongoose = require('mongoose')
var config = require('./config.js');

var app = express();


mongoose.connect(config.database, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to database");
    }
})

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(morgan('dev'));


app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendfile('./public/app/views/index.html');
})

app.listen(config.port, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Listening on port 8080")
    }
});