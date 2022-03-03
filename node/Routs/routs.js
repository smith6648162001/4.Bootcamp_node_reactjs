const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    console.log("Paso 1 realizado")
    res.send(`<h1>Todo bien y funcionamiento</h1>`)
});

module.exports.inicio = router;