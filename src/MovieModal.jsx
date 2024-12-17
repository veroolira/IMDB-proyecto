import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    backgroundColor: '#333',
    color: 'white',
  }
};

function MovieModal({ isOpen, onClose, movie }) {
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
            {/* Aquí puedes agregar más detalles de la película */}
            <button onClick={onClose} className="btn btn-secondary mt-3">Cerrar</button> {/* Agrega un botón para cerrar */}
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default MovieModal;