"use strict";

const http         = require('http');
const url = require('url');
const finalhandler = require('finalhandler');
// const Router       = require('router');
const querystring  = require('querystring');
const bodyParser   = require('body-parser');
const bcrypt       = require('bcrypt');
const router       = new Router({ mergeParams: true});
const router = new Router();

router.get('/', (request, response) => {
  // A good place to start!
  response.end();
});

const server = http.createServer((request, response) => {
  router(request, response, finalhandler(request, response));
});

exports.listen = function(port, callback) {
  server.listen(port, callback);
};

exports.close = function(callback) {
  server.close(callback);
};
