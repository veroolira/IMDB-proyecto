import React, { useState, useEffect } from 'react';
import './App.css';
import MovieList from './MovieList';
import Modal from 'react-modal';
import MovieModal from './MovieModal'; 
import Footer from './Footer'; // Importa el componente Footer

Modal.setAppElement('#root'); 

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null); 

  const [isModalOpen, setIsModalOpen] = useState(false); 

  useEffect(() => {
/*     const fetchMovies = async () => {
      const response  = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=4f573ea0aa920d51a123405a7ffd7a5c&language=es-ES`
      );
      const data = await response.json();
      setMovies(data.results);
    };

    fetchMovies();
  }, []); */

  const fetchMovies = async () => {
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=4f573ea0aa920d51a123405a7ffd7a5c&language=es-ES`;

    if (searchTerm) { // Si hay un término de búsqueda, usar el endpoint de búsqueda
      url = `https://api.themoviedb.org/3/search/movie?api_key=4f573ea0aa920d51a123405a7ffd7a5c&language=es-ES&query=${searchTerm}`;
    }

    const response = await fetch(url);
    const data = await response.json();
    setMovies(data.results);
  };

  fetchMovies();
}, [searchTerm]); // Añadir searchTerm como dependencia


  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true); 
  };

  const closeModal = () => {
    setIsModalOpen(false); 
  };

  return (
    <div className="App">
      <header>
        <h1>Buscador de Películas</h1>
        <input
          type="text"
          placeholder="Buscar películas..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </header>
      <main className="mt-4"> {/* Agrega un margen superior al main */}
        <MovieList 
          movies={movies} 
          searchTerm={searchTerm} 
          onMovieSelect={handleMovieSelect} 
        />
        <MovieModal 
          isOpen={isModalOpen} 
          onClose={closeModal} 
          movie={selectedMovie} 
        /> 
      </main>
      <Footer /> {/* Agrega el componente Footer */}
    </div>
  );
}

export default App;