const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const config = require('./config/config');

const app = express();

mongoose.connect(config.db.uri);

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

app.get('/', function (request, response) {
	response.sendfile('./public/index.html');
});

app.get('/auth', function (request, response) {
	response.send('Welcome, your token is ' + request.query.code);
});

app.get('/login', function (request, response) {
	response.redirect(config.instagram.auth_url);
});

app.listen(3000);
console.log('App is runung on port 3000');