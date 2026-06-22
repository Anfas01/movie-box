const API_KEY = "e08502d4d3mshc54778fee1dcd51p1dd540jsndea92c51a9e2"; 
const BASE_URL = "https://imdb236.p.rapidapi.com"; 
const API_HOST = "imdb236.p.rapidapi.com"; 

const fetchOptions = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': API_HOST
  }
};

// Helper to get movies for the Home page
export const getPopularMovies = async () => {
  try {
    // Matches your exact verified curl endpoint path
    const response = await fetch(`${BASE_URL}/api/imdb/cast/nm0000190/titles`, fetchOptions);
    
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    
    // Look at the array returned in your playground. If it's a direct array, map it:
    return data.map(movie => ({
      id: movie.id,
      title: movie.primaryTitle || movie.originalTitle,
      release_date: movie.releaseDate,
      poster_path: movie.primaryImage
    })) || [];

  } catch (error) {
    console.error("API Error - falling back:", error);
    return []; 
  }
};

// Helper to search movies using local fallbacks
// Helper to search movies natively via the API network
export const searchMovies = async (query) => {
  try {
    if (!query || !query.trim()) return [];

    // NATIVE FIX: The correct endpoint on this API is /imdb/search with ?query=
    const response = await fetch(
      `${BASE_URL}/imdb/search?query=${encodeURIComponent(query)}`, 
      fetchOptions
    );
    
    if (!response.ok) {
      throw new Error(`Search Network Error: ${response.status}`);
    }

    const data = await response.json();
    
    // The API search results array might be wrapped inside data.results or be a direct array:
    const resultsArray = Array.isArray(data) ? data : (data.results || []);

    return resultsArray.map(movie => ({
      id: movie.id,
      title: movie.primaryTitle || movie.originalTitle || "Unknown Title",
      release_date: movie.releaseDate || "N/A",
      poster_path: movie.primaryImage || "https://via.placeholder.com/500x750?text=No+Image"
    }));

  } catch (error) {
    console.error("Search API Network Error:", error);
    return []; 
  }
};