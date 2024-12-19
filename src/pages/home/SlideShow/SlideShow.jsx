import React, { useEffect, useState } from 'react';
import { FetchingMovie } from '../../../services/FetchMovie';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import { RiHeartFill, RiPlayFill, RiStarFill } from "@remixicon/react";
import Image from '../../../components/Image';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router';
import Headings from '../../../shared/styles/Typo';
import { SectionSlideshow, SwiperButton, SlideshowImage, MovieName, MovieInfor } from './StylesSlideshow';
import { FlexBox } from "../../../shared/styles/LayoutModels/LayoutModels";

export default function SlideShow({ dataType, dataObject, dataInterval, totalItems }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const navigate = useNavigate();

  const fetchMovies = async (type, object, interval, limit) => {
    try {
      const data = await FetchingMovie(type, object, interval, limit);
      setMovies(data);
    } finally {
      setLoading(false);  
    }
  };

  useEffect(() => {
    fetchMovies(dataType, dataObject, dataInterval, totalItems);
  }, []);

  const handleViewDetails = (movie) => {
    navigate(`/movie-details/${movie.ids.simkl_id}`, { state: { movieData: movie } });
  };


  return (
    <SectionSlideshow>
      <Swiper
        modules={[EffectFade, Navigation, Pagination]}
        spaceBetween={30}
        effect={'fade'}
        slidesPerView={1}
        fadeEffect={{ crossFade: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ 
          clickable: true,
          el: '.swiper-pagination'
        }}
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index}>
            <div className='slideshow__wrapper flex'>
              <FlexBox flexDirection="column" alignItems="flex-start" padding='0 16px'>
                <div className='movie-tags flex gap-2'>
                  {movie.genres.map((genres, index) => (
                    <span className='tag' data-tag={index} key={index}>{genres}</span>
                  ))}
                </div>
                <MovieName>
                  <Headings as='h2' className='h1 text-upper'>
                    {movie.title}
                    <span className='movie-time-release'>{movie.release_date}</span>
                  </Headings>
                </MovieName>
                <FlexBox flexWrap="wrap" marginBottom="15px" >
                  <a href="#" className="social-btn">
                    <div className='icon'><RiPlayFill size={16} /> </div>Watch Trailer
                  </a>
                  <a href="#" className="social-btn">
                    <div className='icon'><RiHeartFill size={16} /> </div>Add to Favorite
                  </a>
                </FlexBox>
                <FlexBox alignItems="flex-end" flexWrap="wrap" marginBottom="24px">
                  <MovieInfor>
                    <FlexBox alignItems="flex-end" element="li" className='relative'>  <RiStarFill size={16} color='#f5b50a' /><span className='rating-score'>{movie.ratings.simkl.rating}</span> /10 </FlexBox>
                    <FlexBox alignItems="flex-end" element="li" className='relative'>  Run Time: {movie.runtime} </FlexBox>
                    <FlexBox alignItems="flex-end" element="li" className='relative'>  Release: {new Date(movie.release_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</FlexBox>
                  </MovieInfor>
                </FlexBox>
                <button 
                  className="button flex" 
                  onClick={() => handleViewDetails(movie)}
                >
                  View Details
                </button>
              </FlexBox>

              <SlideshowImage>
                <Image
                  src={`https://simkl.in/posters/${movie.poster}_m.webp`}
                  alt="Movie poster"
                  className="image--wrapper shrink-0"
                  loading={index === 0 ? "eager" : "lazy"}
                  fallback="/src/assets/react.svg"
                  aspectRatio="adapt"
                />
              </SlideshowImage>
            </div>
          </SwiperSlide>
        ))}
        {/* Custom Navigation Buttons */}
        <SwiperButton className="swiper-button swiper-button-prev">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </SwiperButton>
        <SwiperButton className="swiper-button swiper-button-next">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </SwiperButton>
        {/* Custom Pagination */}
        <div className="swiper-pagination"></div>
      </Swiper>
    </SectionSlideshow>
  );
}