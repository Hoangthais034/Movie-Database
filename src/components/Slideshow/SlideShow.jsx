import React, { useEffect, useState } from 'react';
import { FetchingMovie } from '../../services/FetchingMovie';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import { RiHeartFill, RiPlayFill, RiStarFill } from "@remixicon/react";
import Image from '../Image/Image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../shared/styles/slideshow.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router';

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

  if (loading) {
    return (
      <div className="slideshow-container section-placeholder">
        <div >
              <div className='slideshow__wrapper flex'>
                <div className='slideshow__contents md:w-8/12 w-full'>
                  <div className='slideshow__movie-tags movie-tags flex gap-2'>
                  {[...Array(4)].map((_, index) => (
                    <span className='tag overlow-hidden relative' data-tag={index} key={index}> <div className="loading-skeleton" /></span>
                  ))}
  
                  </div>
                  <div className='slideshow__movie-name'>
                    <div className='h1 text-upper overlow-hidden relative'>
                      <div className="loading-skeleton" />
                    </div>
                    <div className='h1 text-upper overlow-hidden relative'>
                      <div className="loading-skeleton" />
                    </div>
                  </div>
                  <div className='slideshow__movie-atc flex flex-wrap'>
                      <a href="#" className="social-btn">
                        <div className='icon'><RiPlayFill size={16} /> </div>Watch Trailer
                      </a>
                      <a href="#" className="social-btn">
                        <div className='icon'><RiHeartFill size={16} /> </div>Add to Favorite
                      </a>
                  </div>
                  <div className='slideshow__movie-meta flex items-end flex-wrap'>
                    <ul className="movie-infor m-0 flex items-end flex-wrap">
                      <li className='relative overlow-hidden relative'><div className="loading-skeleton" /></li>
                      <li className='relative overlow-hidden relative'><div className="loading-skeleton" /></li>
                      <li className='relative overlow-hidden relative'><div className="loading-skeleton" /></li>
                      <li className='relative overlow-hidden relative'><div className="loading-skeleton" /></li>
                    </ul>
                  </div>
                  <div className='slideshow__movie-button overlow-hidden relative'>
                    <div className="loading-skeleton" />
                  </div>
                </div>
                <div className='slideshow__image w-4/12 hidden md:block no-empty overlow-hidden relative'>
                  <div className="loading-skeleton" />
                </div>
              </div>
        </div>
      </div>
      )
  }

  return (
    <div className="slideshow-container">
      <Swiper
        modules={[EffectFade, Navigation, Pagination]}
        spaceBetween={30}
        effect={'fade'}
        slidesPerView={1}
        fadeEffect= {{
          crossFade: true 
        }}
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
              <div className='slideshow__contents md:w-8/12 w-full'>
                <div className='slideshow__movie-tags movie-tags flex gap-2'>
                {movie.genres.map((genres, index) => (
                  <span className='tag' data-tag={index} key={index}>{genres}</span>
                ))}

                </div>
                <div className='slideshow__movie-name'>
                  <h2 className='h1 text-upper'>
                    {movie.title}
                    <span className='movie-time-release'>{movie.release_date}</span>
                  </h2>
                </div>
                <div className='slideshow__movie-atc flex flex-wrap'>
                    <a href="#" className="social-btn">
                      <div className='icon'><RiPlayFill size={16} /> </div>Watch Trailer
                    </a>
                    <a href="#" className="social-btn">
                      <div className='icon'><RiHeartFill size={16} /> </div>Add to Favorite
                    </a>
                </div>
                <div className='slideshow__movie-meta flex items-end flex-wrap'>
                  <ul className="movie-infor m-0 flex items-end flex-wrap">
                    <li className='relative'>  <RiStarFill size={16} color='#f5b50a' /><span className='rating-score'>{movie.ratings.simkl.rating}</span> /10 </li>
                    <li className='relative'>  Run Time: {movie.runtime} </li>
                    <li className='relative'>  Release: {new Date(movie.release_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</li>
                  </ul>
                </div>
                <div className='slideshow__movie-button'>
                  <button 
                    className="button flex" 
                    onClick={() => handleViewDetails(movie)}
                  >
                    View Details
                  </button>
                </div>
              </div>

              <div className='slideshow__image w-4/12 hidden md:block'>
                <Image
                  src={`https://simkl.in/posters/${movie.poster}_m.webp`}
                  alt="Movie poster"
                  className="image--wrapper shrink-0"
                  loading={index === 0 ? "eager" : "lazy"}
                  fallback="/src/assets/react.svg"
                  aspectRatio="adapt"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className="swiper-button swiper-button-prev">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="swiper-button swiper-button-next">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        {/* Custom Pagination */}
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
}
