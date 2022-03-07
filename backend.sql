drop schema peliculas;
create schema peliculas;

create table peliculas.entretenimiento(
	id_pelicula int auto_increment primary key,
    title varchar(50),
    content varchar(150),
    inicio_creacion date
)