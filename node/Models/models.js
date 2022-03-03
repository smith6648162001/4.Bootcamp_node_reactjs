//Tenemos que definir 1 modelo porque solo hay una entidad.

//Se tienen que definir tantos modelos como entidades existan + sus relacionas n a n (En algunos casos)

const {Sequelize, Datatypes} = require ("sequelize");
const {database} = require('../Database/db');
console.log(database);  