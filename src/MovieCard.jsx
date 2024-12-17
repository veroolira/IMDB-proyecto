import React from 'react';

function MovieCard({ movie, onMovieSelect }) {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className="card h-100 bg-info" onClick={() => onMovieSelect(movie)}> 
      <img src={imageUrl} className="card-img-top" alt={movie.title} />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5> 
      </div>
    </div>
  );
}

export default MovieCard;