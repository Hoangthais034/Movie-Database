import React, { useEffect, useState } from 'react';
import { FetchingMovie } from '../../../services/FetchMovie';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import { RiHeartFill, RiPlayFill, RiStarFill } from "@remixicon/react";
import Image from '../../../components/Image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router';
import Headings from '../../../shared/styles/Typo';
import { SectionSlideshow, SwiperButton, SlideshowImage, MovieName, MovieInfor } from './StylesSlideshow';
import { FlexBox } from "../../../shared/styles/LayoutModels/LayoutModels";
import Skeleton from '../../../shared/styles/Skeleton';

export default function SlideShow({ dataType, dataObject, dataInterval, totalItems }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const navigate = useNavigate();

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const data = await FetchingMovie(dataType, dataObject, dataInterval, totalItems);
      setMovies(data);
    } finally {
      setLoading(false);  
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [dataType, dataObject, dataInterval, totalItems]);

  const handleViewDetails = (movie) => {
    navigate(`/movie-details/${movie.ids.simkl_id}`, { state: { movieData: movie } });
  };

  const renderMovieTags = (movie) => (
    movie.genres.map((genre, index) => (
      <span className='tag' data-tag={index} key={index}>{genre}</span>
    ))
  );

  const renderSkeletons = () => (
    <>
      <Skeleton className='skeleton-tag' />
      <Skeleton className='skeleton-tag' />
      <Skeleton className='skeleton-tag' />
    </>
  );

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
        {(movies.length > 0 ? movies : [{ title: true }]).map((movie, index) => (
          <SwiperSlide key={index}>
            <FlexBox className='slideshow__wrapper'>
              <FlexBox flexDirection="column" alignItems="flex-start" padding='0 16px' width={{ default: "100%", md: "66.66%" }}>
                <FlexBox className='movie-tags' gap=".8rem">
                  {loading ? renderSkeletons() : renderMovieTags(movie)}
                </FlexBox>
                <MovieName>
                  <Headings as='h2' className='h1 text-upper'>
                    {loading ? (
                      <>
                        <Skeleton className="skeleton-title" />
                        <Skeleton className="skeleton-title" />
                      </>
                    ) : (
                      <>
                        {movie.title}
                        <span className='movie-time-release'>{movie.release_date}</span>
                      </>
                    )}
                  </Headings>
                </MovieName>
                <FlexBox flexWrap="wrap" marginBottom="15px">
                  <a href="#" className="social-btn">
                    <div className='icon'><RiPlayFill size={16} /> </div>Watch Trailer
                  </a>
                  <a href="#" className="social-btn">
                    <div className='icon'><RiHeartFill size={16} /> </div>Add to Favorite
                  </a>
                </FlexBox>
                <FlexBox alignItems="flex-end" flexWrap="wrap" marginBottom="24px" width="100%">
                  <MovieInfor>
                    {loading ? (
                      <Skeleton className='skeleton-text-1line'></Skeleton>
                    ) : (
                      <>
                        <FlexBox alignItems="flex-end" element="li" className='relative'>  
                          <RiStarFill size={16} color='#f5b50a' />
                          <span className='rating-score'>{movie.ratings.simkl.rating}</span> /10 
                        </FlexBox>
                        <FlexBox alignItems="flex-end" element="li" className='relative'>  Run Time: {movie.runtime} </FlexBox>
                        <FlexBox alignItems="flex-end" element="li" className='relative'>  
                          Release: {new Date(movie.release_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </FlexBox>
                      </>
                    )}
                  </MovieInfor>
                </FlexBox>
                <button 
                  className="butto          " 
                  onClick={() => handleViewDetails(movie)}
                >
                  View Details
                </button>
              </FlexBox>

              <SlideshowImage width="33.33%">
                {loading ? (
                  <Skeleton className="skeleton-image-posters" />
                ) : (
                  <Image
                    src={`https://wsrv.nl/?url=https://simkl.in/posters/${movie.poster}_m.webp`}
                    alt="Movie poster"
                    className="image--wrapper shrink-0"
                    loading={index === 0 ? "eager" : "lazy"}
                    fallback="/src/assets/react.svg"
                    aspectRatio="3/4"
                  />
                )}
              </SlideshowImage>
            </FlexBox>
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