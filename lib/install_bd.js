/**
 * Created by JJLZ on 10/31/16.
 */

'use strict';

let mongoose = require('mongoose');
let Anuncio = require('mongoose').model("Anuncio");
let Usuario = require('mongoose').model("Usuario");

// Borrar y cargar anuncios
Anuncio.remove({}, function(err) {

    if (err) {
        console.log('\t Error borrando anuncios: ' + err);
        return;
    } else {
        console.log('\t Anuncios borrados!');
    }

    cargarAnuncios(function (err) {
        if (err) {
            console.log('\t Error cargando anuncios: ' + err);
        } else {
            console.log('\t Anuncios cargados!');
        }
    });
});

// Borrar y cargar usuarios
Usuario.remove({}, function(err) {

    if (err) {
        console.log('\t Error borrando usuarios: ' + err);
        return;
    } else {
        console.log('\t Usuarios borrados!');
    }

    cargarUsuarios(function (err) {
        if (err) {
            console.log('\t Error cargando usuarios: ' + err);
        } else {
            console.log('\t Usuarios cargados!');
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
};

// Cargar anuncios
function cargarUsuarios(cb) {

    var fs = require('fs');

    try {

        let usuariosFs = require('fs').readFileSync('./lib/usuarios.json', 'utf-8');
        let usuariosJSON = JSON.parse(usuariosFs);

        mongoose.connection.collection('usuarios').insert(usuariosJSON.usuarios);

        cb(null);

    } catch (err) {

        cb(err);
    }
};