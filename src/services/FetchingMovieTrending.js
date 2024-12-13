import axios from "axios";

const API_URL = "https://api.simkl.com/movies/trending/week";
const API_KEY = import.meta.env.VITE_SIMKL_CLIENT_ID;

export const fetchTrendingMovies = async (totalMovies = 5) => {
  try {
    const movies = [];
    const pagesNeeded = Math.ceil(totalMovies);

    for (let page = 1; page <= pagesNeeded; page++) {
      const response = await axios.get(API_URL, {
        params: {
          client_id: API_KEY,
          extended: "title,genres,tmdb",
        },
      });

      if (response.data) {
        movies.push(...response.data);
      }

      if (movies.length >= totalMovies) break;
    }

    return movies.slice(0, totalMovies);
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    throw error;
  }
};
