import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { mockMovies } from './mockMovies';
import Home from "./pages/Home"
import Favorites from './pages/Favorites';
import Header from './components/Header';

function App() {
  const [movies, setMovies] = useState(mockMovies);
  const [favorites, setFavorites] = useState([]);

  return (
    <>
      <Header favorites={favorites} />
      <Routes>
        {/* Pass props inside the element tag like this: */}
        <Route 
          path="/" 
          element={<Home movies={movies} setFavorites={setFavorites} favorites={favorites} />} 
        />
        <Route 
          path="/favorites" 
          element={<Favorites favorites={favorites} setFavorites={setFavorites} />} 
        />
      </Routes>
    </>
  )
}

export default App;