import Image from "../components/Image/Image";
import { useParams } from "react-router";
import React, { useEffect, useState } from 'react';

import { fetchMovieDetails } from "../services/FetchingByID";

export default function MovieDetails() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  
  const movieDetails = async (id) => {
    try {
      const data = await fetchMovieDetails(id);
      setMovie(data);
    } finally {
      setLoading(false);  
    }

  };

  useEffect(() => {
    movieDetails(id);
  }, []);

  if(loading) return <div> loading</div>

  return (
    <div className="movie-details">
      <h1 id={id}>Movie Details Page {movie.poster}</h1>
      <Image key={movie.id}
        src={`https://simkl.in/posters/${movie.poster}_m.webp`}
        alt="Movie poster"
        className="image--wrapper shrink-0"
        loading="eager"
        fallback="/src/assets/react.svg"
        aspectRatio="3/4"
      />
    </div>
  );

}
