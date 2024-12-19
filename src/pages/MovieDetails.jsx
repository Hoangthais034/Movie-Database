import Image from "../components/Image";
import { useParams } from "react-router";
import React, { useEffect, useState } from 'react';
import { RiHeartFill, RiPlayFill, RiStarFill } from "@remixicon/react";
import Headings from '../shared/styles/Typo'
import FetchByID  from '../services/FetchByID';
import TabsSlider from '../components/TabsSlider';


import styled from 'styled-components';

export const SectionSticky = styled.div`
  position: sticky;
  top: 180px;
`;

export const WrapperATC = styled.div`
  padding: 18px;
  display: flex;
  flex-direction: column;
  background-color: #07101a;
  border: 3px solid #0c1c2c;
  gap: 16px;
`;


export default function MovieDetails() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  
  const movieDetails = async (id) => {
    try {
      const data = await FetchByID(id);
      setMovie(data);

    } finally {
      setLoading(false);  
    }

  };

  useEffect(() => {
    movieDetails(id);
  }, []);

  if (loading) return <div className="loading-spinner">Loading...</div>;
  if (!movie) return <div className="error-message">Movie not found</div>;

  return (
    <>
      <div className="section movie-details page-width">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Movie Image Section */}
          <div className="w-full md:w-4/12">
            <SectionSticky className="movie-details__sticky">
              <Image
                src={`https://simkl.in/posters/${movie.poster}_m.webp`}
                alt={`${movie.title} poster`}
                className="image--wrapper shrink-0 rounded-lg shadow-lg"
                loading="eager"
                fallback="/src/assets/react.svg"
                aspectRatio="3/4"
              />
              {/* Buttons */}
              <WrapperATC>
                <button className="button sm-radius btn-primary w-full">
                  Watch Now
                </button>
                <button className="button sm-radius btn-secondary w-full">
                  Add to Watchlist
                </button>
              </WrapperATC>
            </SectionSticky>
          </div>


          <div className="w-full md:w-8/12">
              {/* Movie Title */}
            <Headings as="h2" className="movie-details__bd-hd h2">
              {movie.title}
              <span className='movie-time-release h5'>({movie.year})</span>
            </Headings>
            
            {/* Action Buttons */}
            <div className="movie-details__social flex gap-4">
              <a href="#" className="social-btn">
                <div className='icon'><RiPlayFill size={16} /> </div>Watch Trailer
              </a>
              <a href="#" className="social-btn">
                <div className='icon'><RiHeartFill size={16} /> </div>Add to Favorite
              </a>
            </div>

            {/* Ratting */}
            <div className="movie-details__rate">
              <div className="rate flex items-center gap-2">
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

            {/* Overview */}
            
            <div className="movie-details__overview flex">
              <div className="movie-inner rte w-full md:w-9/12">
                <div className="movie-inner rte w-full md:w-8/12">
                  {movie.overview}
                </div>
                <div>
                  trailers
                </div>
              </div>
              <div className="movie-meta w-full md:w-3/12">
                <div className="movie-meta__director">
                  <span>Director: </span>
                  <span>James Cameron</span>
                </div>
                <div className="movie-meta__genres">
                  <span>Genres: </span>
                  <span>Action, Sci-Fi, Adventure</span>
                </div>
                <div className="movie-meta__release">
                  <span>Release Date: </span>
                  <span>May 1, 2015 (U.S.A)</span>
                </div>
                <div className="movie-meta__runtime">
                  <span>Release Date: </span>
                  <span>141 min</span>
                </div>
                <div className="movie-meta__revenue">
                  <span>Revenue: </span>
                  <span>revenue</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section movie-recommend page-width">
        <TabsSlider title="In Theater" dataType="movies" dataObject="trending" dataInterval="week" totalItems="10" />
      </div>
    </>
  );
  
}
