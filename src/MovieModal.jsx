import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import ReactPlayer from 'react-player'; // Importa react-player


const customStyles = {
  content: {
    backgroundColor: '#333',
    color: 'white',
  }
};

function MovieModal({ isOpen, onClose, movie }) {
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    const fetchTrailer = async () => {
      if (movie) {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=4f573ea0aa920d51a123405a7ffd7a5c&language=es-ES`
        );
        const data = await response.json();
        const trailer = data.results.find(video => video.type === 'Trailer');
        if (trailer) {
          setTrailerKey(trailer.key);
        }
      }
    };

    fetchTrailer();
  }, [movie]);

  if (!movie) {
    return null; 
  }


  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Detalles de la película" style={customStyles}>
      <div className="container-fluid"> {/* Usa un contenedor fluido */}
        <div className="row"> {/* Crea una fila */}
          <div className="col-md-4"> {/* Columna para la imagen */}
            <img src={imageUrl} alt={movie.title} className="img-fluid" /> {/* Asegúrate de que la imagen sea responsive */}
          </div>
          <div className="col-md-8"> {/* Columna para los detalles */}
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            
            {/* Mostrar el tráiler si está disponible */}
            {trailerKey && (
              <ReactPlayer 
                url={`https://www.youtube.com/watch?v=${trailerKey}`} 
                controls={true} 
                width="560px" // Ancho fijo en píxeles
                height="315px" // Altura fija en píxeles
              />
            )}
            
            <button onClick={onClose} className="btn btn-secondary mt-3">Cerrar</button> {/* Agrega un botón para cerrar */}
          </div>
        </div>
      </div>
    </Modal>
  );
}



export default MovieModal;