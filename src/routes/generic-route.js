'use strict';

const express    = require('express');
const controller = require('../controller/controller');
const router     = express();

const paths = {
  'usuarios'   : require('./actions/usuarios'),
  'brinquedos' : require('./actions/brinquedos'),
  'compras'    : require('./actions/compras')
}

const routes = [
  { path: '/usuarios',   action: paths['usuarios'] },
  { path: '/brinquedos', action: paths['brinquedos'] },
  { path: '/compras',    action: paths['compras'] }
]

const createRoute  = ( route )  => router[ 'use' ]( route.path, route.action )
const createRoutes = ( routes ) => routes.map( createRoute )

createRoutes( routes )

module.exports = router;
