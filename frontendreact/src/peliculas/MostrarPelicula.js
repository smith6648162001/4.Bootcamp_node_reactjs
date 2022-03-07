import axios from 'axios';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'; 

const URL = 'http://localhost:4000/movie/';

const ComponenteMostrarPelicula = () => {
    const [movies,setMovies] = useState([]) 
    useEffect(()=>{
        getMovies();
    },[]);

    const getMovies = async() => {
        await axios.get(URL).then((response) => {
            setMovies(response.data);
        });
    }
    const deleteMovie = async (id) => {
        await axios.delete(`${URL}${id}`);
        getMovies();
    }


    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <Link to = '/create' className='btn btn-primary mt-2 mb-2'> Create </Link>
                    <table className="table">
                        <thead className='table primary'>
                            <tr>
                                <th>Title</th>
                                <th>Content</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {movies.map((movie)=>{
                                <tr key = {movie.id_pelicula}>
                                    <td>{movie.title}</td>
                                    <td>{movie.content}</td>
                                    <td>
                                        <Link to={`/edit/${movie.id_pelicula}`} className="btn btn-info ml-2">Editar</Link>
                                        <button onClick={deleteMovie(movie.id_pelicula)} className = "btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
};


export default  ComponenteMostrarPelicula;
