import Image from "../components/Image/Image";
import { useParams } from "react-router";
import React, { useEffect, useState } from 'react';
import { RiHeartFill, RiPlayFill, RiStarFill } from "@remixicon/react";

import { fetchMovieDetails } from "../services/FetchingByID";

export default function MovieDetails() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  
  const movieDetails = async (id) => {
    try {
      const data = await fetchMovieDetails(id);
      setMovie(data);
      console.log(data)

    } finally {
      setLoading(false);  
    }

  };

  useEffect(() => {
    movieDetails(id);
  }, []);

  if(loading) return <div> loading</div>

  return (
    <div className="section movie-details page-width" key={movie.id}>
      <div className="flex ">
        {/* Movie Image Sticky */}
        <div className="w-full md:w-4/12">
          <Image
            src={`https://simkl.in/posters/${movie.poster}_m.webp`}
            alt="Movie poster"
            className="image--wrapper shrink-0"
            loading="eager"
            fallback="/src/assets/react.svg"
            aspectRatio="3/4"
          />
          <div>
            {/* Button */}
            
          </div>
        </div>


        <div className="w-full md:w-8/12">
            {/* Movie Title */}
            <h2 className="movie-details__bd-hd h4">
              {movie.title}
              <span className='movie-time-release'>{movie.year}</span>
            </h2>
          
            {/* Movie Rating */}
            <div className="movie-details__social flex">
            <a href="#" className="social-btn">
              <div className='icon'><RiPlayFill size={16} /> </div>Watch Trailer
            </a>
            <a href="#" className="social-btn">
              <div className='icon'><RiHeartFill size={16} /> </div>Add to Favorite
            </a>
            </div>
            <div className="movie-rate">
              <div className="rate flex">
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
