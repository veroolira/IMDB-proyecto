import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ movies, searchTerm, onMovieSelect }) {
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="row"> {/* Contenedor principal para las tarjetas */}
      {filteredMovies.map((movie) => (
        <div className="col-md-4 mb-4" key={movie.id}> {/* Cada tarjeta ocupa 4 columnas en pantallas medianas y tiene un margen inferior */}
          <MovieCard movie={movie} onMovieSelect={onMovieSelect} />
        </div>
      ))}
    </div>
  );
}

export default MovieList;