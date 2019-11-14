'use strict';

var express = require('express');
var cors = require('cors');
const router = require('./app.js');

// require and use "multer"...

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.use('/', router);

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
