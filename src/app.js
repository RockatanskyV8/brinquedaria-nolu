'use strict'

const express    = require('express');
const bodyParser = require('body-parser');

const app    = express();
const router = express.Router();

const route = require('./routes/generic-route');

app.set('view engine', 'ejs');
app.set('views', './view');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/nolu', route);

module.exports = app;
