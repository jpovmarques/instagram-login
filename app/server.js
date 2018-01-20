const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const config = require('./config/config');
const authUser = require('./services/userService')

const app = express();
const path = __dirname + '/public';

mongoose.connect(config.db.uri);

app.use(morgan('dev'));
app.use(express.static(path));

app.get('/', function (request, response) {
	response.sendFile(path + '/index.html');
});

app.get('/auth', authUser);

app.get('/login', function (request, response) {
	response.redirect(config.instagram.auth_login_url);
});

app.listen(3000);
console.log('App is runing on port 3000');