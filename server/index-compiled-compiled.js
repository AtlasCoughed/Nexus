'use strict';

var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
var db = require('./config/db');

var app = express();

// Routes
var adminRoutes = require('./routes/admin');

// Utilities
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(path.join(__dirname, '../src')));

// Routing
app.use('/api', adminRoutes);

app.get('/*', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function () {
  console.log('Express server listening on port: ', app.get('port'));
});

//# sourceMappingURL=index-compiled.js.map

//# sourceMappingURL=index-compiled-compiled.js.map