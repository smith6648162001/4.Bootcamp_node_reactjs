//Lugar de configuración de nuestro servidor ... 
//importamos express    

const express = require('express');
const routes=require('../routs/routs');
const{database} = require('../database/db') 
//Espress: Es una clase configurable, es un servidor http o https que se vincula a un requerimiento 
// Nota: Se necesita crear una instancia


const server_app = express() // Inicializamos la instancia del servidor.

server_app.set('port', process.env.PORT||4000) //Verifica un puerto libre o elije el puerto 4000


//Conectamos una base de datos

try {
    database.authenticate();
    console.log("Conectado");

}catch (error){
    console.log("Algo esta mal, revisemos")
}



server_app.listen(server_app.get('port'),()=>{
    console.log('server on port', server_app.get('port'))
})

server_app.use('/movie',routes.inicio);
console.log('Terminado al fin')