import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from '../../../components/Image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Navigation, Thumbs } from 'swiper/modules';
import { SlideTrailer, SlideButton, SlideTrailerThumbs, TrailerPopup } from './StyleSlideTrailers'
import { FlexBox } from '../../../shared/styles/LayoutModels/LayoutModels';
import { Link } from 'react-router';
import { RiArrowDownSLine, RiArrowUpSLine } from "@remixicon/react";
import Headings from '../../../shared/styles/Typo'
import fetchMoviesComing from '../../../services/FetchMovieSoon'
import FetchByID from '../../../services/FetchByID'



export default function SectionTrailer({title}) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeMovie, setActiveMovie] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const data = await fetchMoviesComing(5);
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

      const movieData = await FetchByID(activeMovie.ids.simkl_id);
      const youtubeId = movieData.trailers[0].youtube;

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

  if (loading) {
    return (
      <SlideTrailer className="overflow-hidden relative">
        <div className="loading-skeleton" style={{ aspectRatio: '16/9' }} />
      </SlideTrailer>
    );
  }

  return (
    <SlideTrailer>
      <FlexBox justifyContent="space-between" alignItems="center" className='section-heading'>
          <div className='section__title'>
              <Headings as="h2" className='h3'>{title}</Headings>
          </div>
          <div className='section__btn btn'>
              <Link to="#">View All</Link>
          </div>
      </FlexBox>
      <FlexBox alignItems="stretch" flexDirection={{ default: "column" ,md: "row" }}>
        <FlexBox width={{ default: "100%" ,md: "65%" }}>
          {activeMovie && (
            <div className="active-movie-container">
              <Image
                key={activeMovie.fanart}
                src={`https://simkl.in/fanart/${activeMovie.fanart}_medium.webp`}
                alt={activeMovie.title}
                className="active-movie-image cursor-pointer"
                loading="lazy"
                fallback="/src/assets/react.svg"
                aspectRatio="16/9"
              />
              <div className="active-movie-info">
                <Headings as="h3">{activeMovie.title}</Headings>
                <p>{new Date(activeMovie.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                <button className="watch-trailer-btn" onClick={handleTrailerClick}>
                  Watch Trailer
                </button>
              </div>
            </div>
          )}
        </FlexBox>

        <FlexBox flexDirection="column" width={{ default: "100%" ,md: "35%" }} justifyContent="space-between" className="slide-trailer__col" alignItems="center">
          <SlideButton className="slide-trailer__prev"><RiArrowUpSLine size={32} color='#FFF'/></SlideButton>
          <SlideTrailerThumbs>
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
                  <div className="slide-trailer__image">
                    <Image
                      src={`https://simkl.in/fanart/${movie.fanart}_medium.webp`}
                      alt={movie.title || `Thumbnail ${index + 1}`}
                      className="image--wrapper shrink-0"
                      loading="lazy"
                      fallback="/src/assets/react.svg"
                      aspectRatio="16/9"
                    />
                    <div className='slide-trailer__image-content'>
                      <p className='trailer--title m-0 font-heading'>{movie.title}</p>
                      <p className='trailer--release m-0 subtext'>{new Date(movie.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </SlideTrailerThumbs>
          <SlideButton className="slide-trailer__next"><RiArrowDownSLine size={32} color='#FFF'/></SlideButton>
        </FlexBox>
      </FlexBox>

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
    </SlideTrailer>
  );
}