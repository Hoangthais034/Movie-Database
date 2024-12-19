import axios from "axios";

const API_URL = "https://api.simkl.com/";
const API_KEY = import.meta.env.VITE_SIMKL_CLIENT_ID;
const cache = new Map();

const ongoingRequests = new Map();

export const FetchingMovie = async (type, object, interval, limit) => {
  const cacheKey = `${type}-${object}-${interval}-${limit}`;

  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }

  if (ongoingRequests.has(cacheKey)) {
    return ongoingRequests.get(cacheKey);
  }

  const fetchPromise = (async () => {
    try {
      const items = [];
      const pagesNeeded = Math.ceil(limit / 10);

      for (let page = 1; page <= pagesNeeded; page++) {
        const url = `${API_URL}${type}/${object}/${interval}`;
        const response = await axios.get(url, {
          params: {
            extended: "title,genres",
            client_id: API_KEY,
          },
        });

        if (response.data) {
          items.push(...response.data);
        }

        if (items.length >= limit) break;
      }

      const result = items.slice(0, limit);
      cache.set(cacheKey, result);
      return result;
    } catch (error) {
      console.error(`Error fetching ${type} data:`, error);
      throw error;
    } finally {
      ongoingRequests.delete(cacheKey);
    }
  })();

  ongoingRequests.set(cacheKey, fetchPromise);
  return fetchPromise;
};
