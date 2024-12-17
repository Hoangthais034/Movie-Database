import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from "axios";
import Image from '../Image/Image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Navigation, Thumbs } from 'swiper/modules';
import '../../shared/styles/slide-trailers.css';
import { Link } from 'react-router';
import movieTrailer from 'movie-trailer';
import { RiArrowDownSLine, RiArrowUpSLine } from "@remixicon/react";


const API_URL = "https://api.simkl.com/movies/trending/";
const API_KEY = import.meta.env.VITE_SIMKL_CLIENT_ID;
const fetchTrendingMovies = async (totalMovies = 5) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        release_box: 'next_12',
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

export default function SlideTrailer({title}) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeMovie, setActiveMovie] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const data = await fetchTrendingMovies(5);
        setMovies(data);
        setActiveMovie(data[0]);
      } finally {
        setLoading(false);
      }
    };

    getTrendingMovies();
  }, []);

  const handleSlideChange = (swiper) => {
    const currentMovie = movies[swiper.realIndex];
    setActiveMovie(currentMovie);
  };

  const handleTrailerClick = async () => {
    try {
      if (!activeMovie) return;
      
      const trailerResult = await movieTrailer(activeMovie.title);
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

  if (loading) {
    return (
      <div className="slide-trailer overflow-hidden relative">
        <div className="loading-skeleton" style={{ aspectRatio: '16/9' }} />
      </div>
    );
  }

  return (
    <div className="slide-trailer">
      <div className='section-heading flex justify-between items-center'>
          <div className='section__title'>
              <h2 className='h3'>{title}</h2>
          </div>
          <div className='section__btn btn'>
              <Link to="#">View All</Link>
          </div>
      </div>
      <div className="slide-trailer__flex">
        <div className="slide-trailer__images">
          {activeMovie && (
            <div className="active-movie-container overflow-hidden">
              <Image
                key={activeMovie.poster}
                src={`https://simkl.in/posters/${activeMovie.poster}_w.webp`}
                alt={activeMovie.title}
                className="active-movie-image cursor-pointer"
                loading="lazy"
                fallback="/src/assets/react.svg"
                aspectRatio="16/9"
              />
              <div className="active-movie-info">
                <h3>{activeMovie.title}</h3>
                <p>{new Date(activeMovie.release_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                <button className="watch-trailer-btn" onClick={handleTrailerClick}>
                  Watch Trailer
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="slide-trailer__col">
          <div className="slide-trailer__prev"><RiArrowUpSLine size={32} color='#FFF'/></div>
          <div className="slide-trailer__thumbs">
            <Swiper
              direction="vertical"
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              slideToClickedSlide={true}
              onSlideChange={handleSlideChange}
              navigation={{
                nextEl: ".slide-trailer__next",
                prevEl: ".slide-trailer__prev"
              }}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                  spaceBetween: 24
                }
              }}
              modules={[Navigation, Thumbs]}
            >
              {movies.map((movie, index) => (
                <SwiperSlide key={movie.id || index}>
                  <div className="slide-trailer__image grid gap-4 overflow-hidden">
                    <Image
                      src={`https://simkl.in/posters/${movie.poster}_w.webp`}
                      alt={movie.title || `Thumbnail ${index + 1}`}
                      className="image--wrapper shrink-0"
                      loading="lazy"
                      fallback="/src/assets/react.svg"
                      aspectRatio="16/9"
                    />
                    <div className='slide-trailer__image-content'>
                      <p className='trailer--title m-0 font-heading'>{movie.title}</p>
                      <p className='trailer--release m-0 subtext'>{new Date(movie.release_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="slide-trailer__next"><RiArrowDownSLine size={32} color='#FFF'/></div>
        </div>
      </div>

      {showTrailer && trailerUrl && (
        <div className="trailer-popup">
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
              src={trailerUrl.replace('watch?v=', 'embed/')}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}