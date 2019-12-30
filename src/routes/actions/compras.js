const express    = require('express');
const controller = require('../../controller/controller');

const router = express.Router();

const routes = [
  { method: 'get',    path: '/get'},
  { method: 'post',   path: '/create'},
  { method: 'put',    path: '/update'},
  { method: 'delete', path: '/delete'}
]

const createRoute  = ( route )  => router[ route.method ]( route.path, controller.rule )
const createRoutes = ( routes ) => routes.map( createRoute )

createRoutes( routes )

module.exports = router;
