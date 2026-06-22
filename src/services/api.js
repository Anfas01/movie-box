const API_KEY = "YOUR_TMDB_API_KEY_HERE"; // Replace with your actual TMDB key
const BASE_URL = "https://api.themoviedb.org/3";

// Helper to get popular movies for the Home page
export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

// Helper to search movies using the search bar
export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  );
  const data = await response.json();
  return data.results;
};