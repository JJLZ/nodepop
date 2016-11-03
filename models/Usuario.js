/**
 * Created by JJLZ on 10/31/16.
 */

"use strict";

var mongoose = require('mongoose');

var usuarioSchema = mongoose.Schema({
    nombre: String,
    email: String,
    clave: String
});

mongoose.model('Usuario', usuarioSchema);
