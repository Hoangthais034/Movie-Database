import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from "axios";
import Image from './Image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Navigation, Thumbs } from 'swiper/modules';
import '../shared/styles/slide-trailers.css';
import { Link } from 'react-router';
import movieTrailer from 'movie-trailer';

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
  const [error, setError] = useState(null);
  const [imagesNavSlider, setImagesNavSlider] = useState(null);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const data = await fetchTrendingMovies(5);
        setMovies(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getTrendingMovies();
  }, []);

  if (loading) {
    return (
      <div className="slide-trailer">
        <div className="loading-skeleton" style={{ aspectRatio: '16/9' }} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="slide-trailer">
        <div className="error-message">Error loading trailers: {error.message}</div>
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
        {movies.map((movie, index) => (
          index === 0 && console.log(movie.title)
        ))}

        </div>

        <div className="slide-trailer__col">
          <div className="slide-trailer__prev">Prev</div>
          <div className="slide-trailer__thumbs">
            <Swiper
              direction="vertical"
              spaceBetween={24}
              slidesPerView={3}
              loop={true}
              navigation={{
                nextEl: ".slide-trailer__next",
                prevEl: ".slide-trailer__prev"
              }}
              className="swiper-container1"
              breakpoints={{
                0: {
                  direction: "horizontal"
                },
                768: {
                  direction: "vertical"
                }
              }}
              modules={[Navigation, Thumbs]}
            >
              {movies.map((movie, index) => (
                <SwiperSlide key={movie.id || index}>
                  <div className="slide-trailer__image grid gap-4">
                    <Image
                      src={`https://simkl.in/posters/${movie.poster}_w.webp`}
                      alt={movie.title || `Thumbnail ${index + 1}`}
                      className="image--wrapper shrink-0"
                      loading="lazy"
                      fallback="/src/assets/react.svg"
                      aspectRatio="16/9"
                    />
                    <div className='slide-trailer__image-content'>
                      <h4 className='trailer--title m-0'>{movie.title}</h4>
                      <p className='trailer--release m-0 subtext'>{movie.release_date}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="slide-trailer__next">Next</div>
        </div>
      </div>
    </div>
  );
}