/**
 * Created by JJLZ on 10/31/16.
 */

'use strict';

let mongoose = require('mongoose');

// require('./mongoConnection');
// require('../models/Usuario');
require('../models/Anuncio');

let Anuncio = require('mongoose').model("Anuncio");

// Borrar anuncios
Anuncio.remove({}, function(err) {

    if (err) {
        console.log('\t Error borrando anuncios: ' + err);
        return;
    }

    console.log('\t Anuncios borrados!');

    cargarAnuncios(function (err) {
        if (err) {
            console.log('\t Error cargando anuncios: ' + err);
        } else {

            console.log('\t Anuncios cargados!');
        }
    });
});

// Cargar anuncios
function cargarAnuncios(cb) {

    var fs = require('fs');

    try {

        let anunciosFs = require('fs').readFileSync('./lib/anuncios.json', 'utf-8');
        let anunciosJson= JSON.parse(anunciosFs);

        mongoose.connection.collection('anuncios').insert(anunciosJson.anuncios);

        cb(null);

    } catch (err) {

        cb(err);
    }
}

module.exports = cargarAnuncios;