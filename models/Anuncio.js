/**
 * Created by JJLZ on 10/31/16.
 */

"use strict";

var mongoose = require('mongoose');

var anuncioSchema = mongoose.Schema({
    nombre: String,
    venta: Boolean,
    precio: Number,
    foto: String,
    tags: [String]
});

mongoose.model('Anuncio', anuncioSchema);