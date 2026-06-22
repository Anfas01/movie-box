import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'; // 1. Added useEffect
import Home from "./pages/Home"
import Favorites from './pages/Favorites';
import Header from './components/Header';
import { getPopularMovies } from './services/api'; // 2. Import your API helper

function App() {
  const [movies, setMovies] = useState([]); // Initialize with empty array
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true); // Useful for showing a loading spinner

  // 3. Fetch live data when the app mounts
  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await getPopularMovies();
        setMovies(data);
      } catch (err) {
        console.error("Failed to load movies:", err);
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, []);

  return (
    <>
      <Header favorites={favorites} />
      {loading ? (
        <div className="loading">Loading movies...</div>
      ) : (
        <Routes>
          <Route 
            path="/" 
            element={<Home movies={movies} setFavorites={setFavorites} favorites={favorites} setMovies={setMovies} />} 
          />
          <Route 
            path="/favorites" 
            element={<Favorites favorites={favorites} setFavorites={setFavorites} />} 
          />
        </Routes>
      )}
    </>
  );
}

export default App;