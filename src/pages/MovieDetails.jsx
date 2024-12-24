import Image from "../components/Image";
import { useParams } from "react-router";
import React, { useEffect, useState } from 'react';
import { RiHeartFill, RiPlayFill, RiStarFill } from "@remixicon/react";
import Headings from '../shared/styles/Typo'
import FetchByID  from '../services/FetchByID';
import TabsSlider from '../components/TabsSlider/TabsSlider';
import { FlexBox } from '../shared/styles/LayoutModels/LayoutModels';
import styled from 'styled-components';
import { BlockTrailer, TrailerPopup } from '../pages/home/SlideTrailer/StyleSlideTrailers'



export const MovieName = styled(Headings)`
    margin-bottom: 15px;

    span{
      font-size: 36px;
      color: var(--color-subtext);
      font-weight: 400;
      text-transform: uppercase;
      margin-left: 12px;
    }
`;

export const SectionSticky = styled(FlexBox)`
  position: sticky;
  top: 180px;
`;

export const WrapperATC = styled(FlexBox)`
  padding: 18px;
  background-color: #07101a;
  border: 3px solid #0c1c2c;
  gap: 16px;
`;

export const Ratting = styled(FlexBox)`
  border: 1px solid #405266;
  border-inline: 0;
  margin: 24px 0 32px;
  .rate-star{
    border-right: 1px solid #405266;
    padding-block: 1.4rem;
    padding-right: 2.4rem;
    p{
      color: #ffffff;
      font-size: 15px;
      font-weight: 400;
      margin: 0;
      span{
        font-size: 11px;
        color: #abb7c4;
        font-weight: 300;
      }
    }

    .rv{
      font-size: 12px;
      color: #4280bf;
    }
  }
  .rate-stars{
    p{
      padding-right: 1.5rem;
    }
  }
`;

export const SBit = styled(FlexBox)`
  margin-bottom: 24px;

  h6 {
    font-size: 14px;
    color: #abb7c4;
    font-weight: bold;
    text-transform: capitalize;
    margin: 0;
  }
  p {
    font-size: 14px;
    color: #abb7c4;
    font-weight: 300;
    text-transform: none;
    line-height: 24px !important;
    margin: 0;
  }
`;

export default function MovieDetails() {
  
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [trailerUrl, setTrailerUrl] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);

  const movieDetails = async (id) => {
    try {
      const data = await FetchByID(id);
      setMovie(data);
      console.log(data)
    } finally {
      setLoading(false);  
    }

  };

  useEffect(() => {
    movieDetails(id);
  }, []);

  const handleTrailerClick = async () => {
    try {
      if (!movie) return;
      
      const movieData = await FetchByID(movie.ids.simkl);
      const youtubeId = movieData.trailers[0].youtube;
      console.log(movieData, youtubeId)

      const trailerResult = `https://www.youtube.com/embed/${youtubeId}`;
      if (trailerResult) {
        setTrailerUrl(trailerResult);
        setShowTrailer(true);
      } else {
        console.log('No trailer found');
      }
    } catch (error) {
      console.error('Error fetching trailer:', error);
    }
  };

  if (loading) return <div className="loading-spinner">Loading...</div>;
  if (!movie) return <div className="error-message">Movie not found</div>;

  return (
    <>
      <div className="section movie-details page-width">
        <FlexBox flexDirection={{ default: "column", md: "row" }} gap="4rem">
          {/* Movie Image Section */}
          <FlexBox width={{ default: "100%", md: "33.33%" }}>
            <SectionSticky width="100%" flexDirection="column">
              <Image
                src={`https://wsrv.nl/?url=https://simkl.in/posters/${movie.poster}_m.webp`}
                alt={`${movie.title} poster`}
                className="image--wrapper shrink-0 rounded-lg shadow-lg"
                loading="eager"
                fallback="/src/assets/react.svg"
                aspectRatio="3/4"
              />
              {/* Buttons */}
              <WrapperATC flexDirection="column">
                <button className="button sm-radius btn-primary w-full">
                  Watch Now
                </button>
                <button className="button sm-radius btn-secondary w-full">
                  Add to Watchlist
                </button>
              </WrapperATC>
            </SectionSticky>
          </FlexBox>


          <FlexBox width={{ default: "100%", md: "66.66%" }} flexDirection="column">
              {/* Movie Title */}
            <MovieName as="h2" className="h2">
              {movie.title}
              <span>({movie.year})</span>
            </MovieName>
            
            {/* Action Buttons */}
            <FlexBox gap="2rem">
              <a href="#" className="social-btn" onClick={handleTrailerClick}>
                <div className='icon'><RiPlayFill size={16} /> </div>Watch Trailer
              </a>
              <a href="#" className="social-btn">
                <div className='icon'><RiHeartFill size={16} /> </div>Add to Favorite
              </a>
            </FlexBox>

            {/* Ratting */}
            <Ratting alignItems="center" gap="1.5rem">
              <FlexBox className="rate-star" alignItems="center" gap="1.5rem">
                <RiStarFill size={32} color='#f5b50a' />
                  <FlexBox flexDirection="column" gap=".8rem">
                    <p>8.1 <span className="total"> /10</span></p>
                    <span className="rv">56 Reviews</span>
                  </FlexBox>
              </FlexBox>
              <FlexBox className="rate-stars" alignItems="center" gap="1rem">
                  <p>Rate This Movie:  </p>
                  <RiStarFill size={24} color='#f5b50a' />
                  <RiStarFill size={24} color='#f5b50a' />
                  <RiStarFill size={24} color='#f5b50a' />
                  <RiStarFill size={24} color='#f5b50a' />
                  <RiStarFill size={24} color='#f5b50a' />
              </FlexBox>
            </Ratting>

            {/* Overview */}
            
            <FlexBox gap="2.4rem">
              <FlexBox width={{ default: "100%", md: "75%" }} flexDirection="column" gap="2.4rem">
                <div className="rte">
                  {movie.overview}
                </div>
                <BlockTrailer>
                  <div className="active-movie-container">
                    <Image
                      key={movie.fanart}
                      src={`https://wsrv.nl/?url=https://simkl.in/fanart/${movie.fanart}_medium.webp`}
                      alt={movie.title}
                      className="active-movie-image cursor-pointer"
                      loading="lazy"
                      fallback="/src/assets/react.svg"
                      aspectRatio="16/9"
                    />
                    <div className="active-movie-info">
                      <Headings as="h3">{movie.title}</Headings>
                      <p>{new Date(movie.released).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                      <button className="watch-trailer-btn" onClick={handleTrailerClick}>
                        Watch Trailer
                      </button>
                    </div>
                  </div>
                </BlockTrailer>

              </FlexBox>
              <FlexBox width={{ default: "100%", md: "25%" }} flexDirection="column" gap="1.2rem">
                <SBit className="movie-meta__director" flexDirection="column" gap=".8rem">
                  <h6>Director: </h6>
                  <span>{movie.director}</span>
                </SBit>
                <SBit className="movie-meta__genres" flexDirection="column" gap=".8rem">
                  <h6>Genres: </h6>
                  <span>
                    {movie.genres.join(', ')}
                  </span>
                </SBit>
                <SBit className="movie-meta__release" flexDirection="column" gap=".8rem">
                  <h6>Release Date: </h6>
                  <span>{new Date(movie.released).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                </SBit>
                <SBit className="movie-meta__runtime" flexDirection="column" gap=".8rem">
                  <h6>Runtime: </h6>
                  <span>{movie.runtime} min</span>
                </SBit>
                <SBit className="movie-meta__revenue" flexDirection="column" gap=".8rem">
                  <h6>Revenue: </h6>
                  <span>
                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(movie.revenue)}
                  </span>
                </SBit>
              </FlexBox>
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </div>
      <div className="section movie-recommend page-width">
        <TabsSlider title="In Theater" dataType="movies" dataObject="trending" dataInterval="week" totalItems="10" />
      </div>
      {showTrailer && trailerUrl && (
        <TrailerPopup>
          <div className="trailer-popup-content">
            <button 
              className="close-trailer"
              onClick={() => setShowTrailer(false)}
            >
              ×
            </button>
            <iframe
              width="100%"
              height="100%"
              src={trailerUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </TrailerPopup>
      )}
    </>
  );
  
}
