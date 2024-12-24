import Image from "../components/Image";
import { useParams } from "react-router";
import React, { useEffect, useState } from 'react';
import { RiHeartFill, RiStarFill, RiStarLine, RiStarHalfLine } from "@remixicon/react";
import Headings from '../shared/styles/Typo'
import FetchByID  from '../services/FetchByID';
import TabsSlider from '../components/TabsSlider/TabsSlider';
import { FlexBox } from '../shared/styles/LayoutModels/LayoutModels';
import styled from 'styled-components';
import { BlockTrailer } from '../pages/home/SlideTrailer/StyleSlideTrailers'
import TrailerModal from '../components/TrailerModal';


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
              <TrailerModal element="a" movieId={movie.ids.simkl} fetchTrailer={async (id) => {
                const movieData = await FetchByID(id);
                return movieData.trailers[0].youtube;
              }} />
              <a href="#" className="social-btn">
                <div className='icon'><RiHeartFill size={16} /> </div>Add to Favorite
              </a>
            </FlexBox>

            {/* Ratting */}
            <Ratting alignItems="center" gap="1.5rem">
              <FlexBox className="rate-star" alignItems="center" gap="1.5rem">
                <RiStarFill size={32} color='#f5b50a' />
                  <FlexBox flexDirection="column" gap=".8rem">
                    <p>{movie.ratings.simkl.rating} <span className="total"> /10</span></p>
                    <span className="rv">{movie.ratings.simkl.votes} Votes</span>
                  </FlexBox>
              </FlexBox>
              <FlexBox className="rate-stars" alignItems="center" gap="1rem">
                  <p>Rate This Movie:  </p>
                  {Array.from({ length: 10 }, (_, index) => {
                    const starValue = index + 1;
                    if (starValue <= Math.floor(movie.ratings.simkl.rating)) {
                      return <RiStarFill key={index} size={24} color='#f5b50a' />;
                    } else if (starValue === Math.ceil(movie.ratings.simkl.rating) && movie.ratings.simkl.rating % 1 !== 0) {
                      return <RiStarHalfLine key={index} size={24} color='#f5b50a' />;
                    } else {
                      return <RiStarLine key={index} size={24} color='#f5b50a' />;
                    }
                  })}
              </FlexBox>
            </Ratting>

            {/* Overview */}
            
            <FlexBox gap="2.4rem" flexDirection={{ default: "column", md: "row" }}>
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
                      <TrailerModal movieId={movie.ids.simkl} fetchTrailer={async (id) => {
                        const movieData = await FetchByID(id);
                        return movieData.trailers[0].youtube;
                      }} />
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
    </>
  );
  
}

