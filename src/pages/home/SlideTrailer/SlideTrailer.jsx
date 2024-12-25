import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from '../../../components/Image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Navigation, Thumbs } from 'swiper/modules';
import { BlockTrailer, SlideButton, SlideTrailerThumbs } from './StyleSlideTrailers'
import { FlexBox } from '../../../shared/styles/LayoutModels/LayoutModels';
import { Link } from 'react-router';
import { RiArrowDownSLine, RiArrowUpSLine } from "@remixicon/react";
import Headings from '../../../shared/styles/Typo'
import fetchMoviesComing from '../../../services/FetchMovieSoon'
import FetchByID from '../../../services/FetchByID'
import TrailerModal from '../../../components/TrailerModal';



export default function SectionTrailer({title}) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeMovie, setActiveMovie] = useState(null);

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

  if (loading) {
    return (
      <BlockTrailer className="overflow-hidden relative">
        <div className="loading-skeleton" style={{ aspectRatio: '16/9' }} />
      </BlockTrailer>
    );
  }

  return (
    <BlockTrailer>
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
                src={`https://wsrv.nl/?url=https://simkl.in/fanart/${activeMovie.fanart}_medium.webp`}
                alt={activeMovie.title}
                className="active-movie-image cursor-pointer"
                loading="lazy"
                fallback="/src/assets/react.svg"
                aspectRatio="16/9"
              />
              <div className="active-movie-info">
                <Headings as="h3">{activeMovie.title}</Headings>
                <p>{new Date(activeMovie.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                <TrailerModal movieId={activeMovie.ids.simkl_id} fetchTrailer={async (id) => {
                  const movieData = await FetchByID(id);
                  return movieData.trailers[0].youtube;
                }} />
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
                      src={`https://wsrv.nl/?url=https://simkl.in/fanart/${movie.fanart}_w.webp`}
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
    </BlockTrailer>
  );
}