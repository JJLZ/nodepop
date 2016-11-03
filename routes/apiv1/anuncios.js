/**
 * Created by JJLZ on 10/31/16.
 */

"use strict";

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Anuncio = mongoose.model('Anuncio');

router.get('/', function (req, res, next) {

    // Agregamos filtros
    var filter = {};
    var nombre = req.query.nombre;
    var precio = req.query.precio;
    var tag = req.query.tags;

    if (typeof nombre !== 'undefined') {
        filter.nombre = nombre;
    }

    if (typeof  precio !== 'undefined') {
        filter.precio = precio;
    }

    // FIX ME: no esta funcionando el filtro por tag
    if (typeof tag !== 'undefined') {
        filter.tag = Anuncio.tags;
    }

    // Ordenamiento
    var sort = req.query.sort || null;

    // Limitar el numero de anuncios a mostrar
    var limit = parseInt(req.query.limit) || null;

    Anuncio.find(filter).sort(sort).limit(limit).exec(function (err, anuncios) {

        if (err) {
            next(err);
            return;
        }

        res.json({success: true, anuncios: anuncios});
        // lo siguiente es lo mismo pero simplificado
        // res.json({success: true, anuncios});
    });
});

module.exports = router;