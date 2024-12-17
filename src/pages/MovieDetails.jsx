import Image from "../components/Image/Image";
import { useLocation } from "react-router";
import React, { useEffect, useState } from 'react';
import { RiHeartFill, RiPlayFill, RiStarFill } from "@remixicon/react";

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!location.state?.movieData) {
          throw new Error("No movie data provided");
        }
        setMovie(location.state.movieData);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [location.state]);

  if (loading) return <div className="loading-spinner">Loading...</div>;
  if (!movie) return <div className="error-message">Movie not found</div>;

  return (
    <div className="section movie-details page-width">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Movie Image Section */}
        <div className="w-full md:w-4/12">
          <div className="sticky top-4">
            <Image
              src={`https://simkl.in/posters/${movie.poster}_m.webp`}
              alt={`${movie.title} poster`}
              className="image--wrapper shrink-0 rounded-lg shadow-lg"
              loading="eager"
              fallback="/src/assets/react.svg"
              aspectRatio="3/4"
            />
            {/* Buttons */}
            <div className="mt-4 flex flex-col gap-2">
              <button className="btn-primary w-full">
                Watch Now
              </button>
              <button className="btn-secondary w-full">
                Add to Watchlist
              </button>
            </div>
          </div>
        </div>


        <div className="w-full md:w-8/12">
            {/* Movie Title */}
          <h2 className="movie-details__bd-hd h4">
            {movie.title}
            <span className='movie-time-release ml-2'>({movie.year})</span>
          </h2>
          
          {/* Action Buttons */}
          <div className="movie-details__social flex gap-4 my-4">
            <button className="social-btn flex items-center gap-2">
              <RiPlayFill size={16} />
              Watch Trailer
            </button>
            <button className="social-btn flex items-center gap-2">
              <RiHeartFill size={16} />
              Add to Favorite
            </button>
          </div>
          <div className="movie-rate">
            <div className="rate flex items-center gap-2 mb-4">
              <RiStarFill size={16} color='#f5b50a' />
                <p><span>8.1</span> /10
                  <span className="rv">56 Reviews</span>
              </p>
            </div>
                <div className="rate-star flex">
                <p>Rate This Movie:  </p>
                <RiStarFill size={12} color='#f5b50a' />
                <RiStarFill size={12} color='#f5b50a' />
                <RiStarFill size={12} color='#f5b50a' />
                <RiStarFill size={12} color='#f5b50a' />
                <RiStarFill size={12} color='#f5b50a' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}
