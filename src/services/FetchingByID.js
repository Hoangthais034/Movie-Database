import axios from "axios";

const API_URL = "https://api.simkl.com/movies/";
const API_KEY = import.meta.env.VITE_SIMKL_CLIENT_ID;

export const FetchingByID = async (id) => {
  try {
    const url = `${API_URL}${id}`;
    const response = await axios.get(url, {
      params: {
        client_id: API_KEY,
        extended: "full",
      },
    });

    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};
