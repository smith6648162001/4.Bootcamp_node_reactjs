const {ModeloPelicula} = require('./models');

//la función para mostrar todas las instancias 
//select * from table 

const getAllmovies = async(req,res) => {
    try{
        const Peliculas = await ModeloPelicula.findAll({attributes:['id_pelidula','title','content']});
        res.json(Peliculas);
    }catch (error){
        res.json({message: 'No se encuentran instancias'})
    }
}

//La función para mostrar solo 1 instancias
//sql: select * from table were id_pelicula = 1;

const getOneMovie =  async(req,res) =>{
    try{
        const Pelicula_unica = await ModeloPelicula.findAll({where: {id: req.params.id}});
        res.json(Pelicula_unica);
    }catch (error){
        res.json({mensaje:'No se encontró la instancia'})
    }
}



//La función para crear un registro 
//sql insert into table ...{'300'}...


const createOneMovie = async(req,res) => {
    try{
        await ModeloPelicula.create(req.body);
        res.json({message: "Registro creado satifasctoria"});
    }catch(error){
        res.json({message:"No se ha registrado ningún registro"})
    }
}


//La función para Actualizar un registro

const updateOneMovie = async(req,res) => {
    try {
        await ModeloPelicula.update(req.body({where: {id: req.params.id}}));
        res.json({message: "Registro actualizado"})
    } catch (error) {
        res.json({message: "No se ha podido actualizar el registro"});
    }
}



//La función para eliminar un registro(=> ModeloPelicula)

const deleteOneMovie = async (req,res) => {
    try {
        await ModeloPelicula.destroy({where: {id: req.params.id}})
        res.json({message: "Eliminado correctamente"})
    } catch (error) {
        res.json({message: "No se pudo eliminar"})
    }
}

module.exports = {getAllmovies, getOneMovie, createOneMovie, updateOneMovie, deleteOneMovie}