
import MovieCard from '../components/MovieCard'

function Favorites({ favorites, setFavorites }) {
  return (
    <div className="home-container">
      <h1 className="page-title">Favorite Movies</h1>
      
      <div className="movie-card__grids">
        {favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} setFavorites={setFavorites} favorites={favorites} />
        ))}
      </div>
    </div>
  )
}

export default Favorites