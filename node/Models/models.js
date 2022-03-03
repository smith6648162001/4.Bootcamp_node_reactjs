//Tenemos que definir 1 modelo porque solo hay una entidad.

//Se tienen que definir tantos modelos como entidades existan + sus relacionas n a n (En algunos casos)

const {Sequelize, DataTypes} = require ('sequelize');
const {database} = require('../Database/db');

//console.log(database);  

//Generar una instancia del modelo

const ModeloPelicula = database.define('Pelicula',{
    title:{type: DataTypes.STRING},
    content:{type: DataTypes.STRING},
})

//console.log(ModeloPelicula);
//console.log(typeof(ModeloPelicula));

module.exports.ModeloPelicula = ModeloPelicula