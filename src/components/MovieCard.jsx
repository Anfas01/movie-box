import './MovieCard.css'

// 1. Make sure App.jsx is passing favorites down to MovieCard!
function MovieCard({ movie, setFavorites, favorites = [] }) {

  // 2. Define it here so the whole component can see it
  const isFavorite = favorites.some((favorite) => favorite.id === movie.id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      setFavorites((prevFavorites) => prevFavorites.filter((favorite) => favorite.id !== movie.id));
    } else {
      setFavorites((prevFavorites) => [...prevFavorites, movie]);
    }
  };

  return (
    <div className="movie-card">
      <div className="movie-poster-container">
        <img src={movie.poster_path} alt={movie.title} className="movie-poster" />
        {/* 3. Simplified the onClick since movie is already in scope */}
        <button className="favorite-btn" aria-label="Add to favorites" onClick={handleFavoriteClick}>
          <i className={isFavorite ? 'fas fa-heart' : 'far fa-heart'}></i>
        </button>
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        {/* Optional chaining safely handles a missing release_date string */}
        <span className="movie-year">{movie.release_date?.split('-')[0]}</span>
      </div>
    </div>
  );
}

export default MovieCard;