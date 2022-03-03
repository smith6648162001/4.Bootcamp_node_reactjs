//Lugar de configuración de nuestro servidor ... 
//importamos express    

const express = require('express');
const routes=require('../Routs/routs');
const{database} = require('../Database/db') 
//Espress: Es una clase configurable, es un servidor http o https que se vincula a un requerimiento 
// Nota: Se necesita crear una instancia


const server_app = express() // Inicializamos la instancia del servidor.


//Concetamos una base de datos

try {
    database.authenticate();
    console.log("Conectado");

}catch (error){
    console.log("Algo esta mal, revisemos")
}

server_app.set('port', process.env.PORT||4000) //Verifica un puerto libre o elije el puerto 4000

server_app.listen(server_app.get('port'),()=>{
    console.log('server on port', server_app.get('port'))
})

server_app.use('/movies',routes.inicio);
console.log('Terminado al fin')