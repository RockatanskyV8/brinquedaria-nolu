'use strict'

const mariadb = require('mariadb');

const repos = {
  'brinquedos' : require('../model/brinquedos'),
  'usuarios'   : require('../model/usuarios'),
  'compras'    : require('../model/compras')
}

const pool = mariadb.createPool({ host : 'localhost', user : 'root', password : 'root' });

function getReqInfo(req){
  let result = []
  if (Object.values(req.body).length   > 0 ){ result = Object.values(req.body)   } else
  if (Object.values(req.params).length > 0 ){ result = Object.values(req.params) }

  return result;
}

exports.rule = async(req, res, next) => {
  let path = (req.originalUrl).split("/");
  let conn;

  try {
    conn = await pool.getConnection();
    res.render(
      path[2],
      {
        linhas :  await conn.query( repos[ path[2] ][ path[3] ], getReqInfo(req) ),
        async : true
      });
    // res.status(200).send(rows)
    // console.log(rows)
    // await res.render(path[2], {linhas : rows, async: true})
    console.log(path)
  } catch (err) {
    throw err;
  } finally {
    if (conn) return conn.end();
  }
}
