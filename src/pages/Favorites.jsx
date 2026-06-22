import { Link } from 'react-router-dom'
import MovieCard from '../components/MovieCard'

function Favorites({ favorites, setFavorites }) {
  return (
    <div className="home-container">
      <h1 className="page-title">Favorite Movies</h1>

      {favorites.length === 0 && (
        <p className="no-favorites">
          No favorite movies yet. <Link style={{ color: '#ff0000', textDecoration: 'none' }} to="/">Add some!</Link>
        </p>
      )}

      <div className="movie-card__grids">
        {favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} setFavorites={setFavorites} favorites={favorites} />
        ))}
      </div>
    </div>
  )
}

export default Favorites