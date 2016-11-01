/**
 * Created by JJLZ on 11/1/16.
 */

"use strict";

var mongoose = require('mongoose');
var db = mongoose.connection;

db.on('error', console.log.bind(console));

db.once('open', function () {
    console.log('Conectado a mongodb.');
});

mongoose.connect('mongodb://localhost:27017/nodepopdb');