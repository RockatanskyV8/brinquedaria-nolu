'use strict'

const express    = require('express');
const bodyParser = require('body-parser');

const app    = express();
const router = express.Router();

const route = require('./routes/generic-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
  }));

app.use('/nolu', route);

module.exports = app;

// async function asyncFunction() {
//   let conn;
//   try {
//   	conn = await pool.getConnection();
//   	const rows = await conn.query("SELECT * FROM brinquedaria_nolu.brinquedos");
//   	console.log(rows[0]);
//   } catch (err) {
// 	   throw err;
//   } finally {
// 	   if (conn) return conn.end();
//   }
// }
