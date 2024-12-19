import axios from "axios";
const API_URL = "https://api.simkl.com/movies/genres/action/this-year/revenue/";
const API_KEY = import.meta.env.VITE_SIMKL_CLIENT_ID;

const fetchMoviesComing = async (totalMovies = 5) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        extended: "title,genres,tmdb",
        langs: 'en',
        client_id: API_KEY,
      },
    });

    if (response.data) {
      return response.data.slice(0, totalMovies);
    }
    return [];
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    throw error;
  }
};

export default fetchMoviesComing;