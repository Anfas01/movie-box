import MovieCard from "../components/MovieCard";
import './Home.css'; // Don't forget to import your new CSS!

function Home({ movies, setFavorites, favorites }) {
  return (
    <div className="home-container">
      <h1 className="page-title">Popular Movies</h1>
      
      {movies.length === 0 && (
        <p className="no-movies">Sorry, no movies found.</p>
      )}

      <div className="movie-card__grids">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} setFavorites={setFavorites} favorites={favorites} />
        ))}
      </div>
    </div>
  );
}

export default Home;