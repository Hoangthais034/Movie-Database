import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { RiStarFill } from "@remixicon/react";
import styled from "styled-components";

import '../shared/styles/tabslider.css';
import { FetchingMovie } from '../services/FetchMovie';
import Headings from '../shared/styles/Typo'
import Image from './Image';
import { FlexBox } from '../shared/styles/LayoutModels/LayoutModels';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


const  Checkdiv = styled(FlexBox)`
  background: red;
`

let tabCounter = 0;

export default function TabsSlider({ title, dataType, dataObject, dataInterval, totalItems }) {
  
    const [moviesByTab, setMoviesByTab] = useState({});
    const [loading, setLoading] = useState(true);

    const fetchMovies = async (type, objects, interval, limit) => {
      try {
        const objectArray = objects.split(',');
        const allMovies = {};
        for (const object of objectArray) {
            const data = await FetchingMovie(type, object.trim(), interval, limit);
            allMovies[object.trim()] = data;
        }
        setMoviesByTab(allMovies);
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
      fetchMovies(dataType, dataObject, dataInterval, totalItems);
    }, []);

    const [activeTab, setActiveTab] = useState(1);
    const [sliderId] = useState(() => `tab-slider-${++tabCounter}`);


    if (loading){
      return (
        <>

        </>
      )
    }

    return (
        <>
            <Checkdiv justifyContent="space-between" alignItems="center" className='section-heading'>
                <div className='section__title'>
                    <Headings as="h2" className='h3'>{title}</Headings>
                </div>
                <div className='section__btn btn'>
                    <Link to="#">View All</Link>
                </div>
            </Checkdiv>
            <div className="tab-slider-container grid gap-5">
                <div className='tab-slider__control flex justify-between items-center flex-wrap'>
                    <ul className={`tab-links flex tab-links-${sliderId}`}>
                        {dataObject.split(',').map((object, index) => (
                            <li key={index} className={activeTab === index + 1 ? "active" : ""} onClick={() => setActiveTab(index + 1)}>
                                <a href={`#tab${index + 1}`} data-tab={object.trim()}>#{object.trim()}</a>
                            </li>
                        ))}
                    </ul>
                    <div className={`tabs-swiper-pagination tabs-pagination-${sliderId}`}></div>
                </div>
                {[...Array(dataObject.split(',').length)].map((_, index) => (
                    activeTab === index + 1 && (
                        <Swiper
                            key={index}
                            modules={[Navigation, Pagination]}
                            spaceBetween={10}
                            slidesPerView={1}
                            navigation={false}
                            pagination={{
                                clickable: true,
                                el: `.tabs-pagination-${sliderId}`,
                            }}
                            loop={true}
                            breakpoints={{
                              460: {
                                slidesPerView: 2,
                                spaceBetween: 10
                              },
                              768: {
                                slidesPerView: 4,
                                spaceBetween: 20
                              },
                              1280: {
                                slidesPerView: 6,
                                spaceBetween: 25
                              }
                            }}
                            data-tab={`tab${index + 1}`}
                        >
                            {moviesByTab[dataObject.split(',')[index].trim()]?.map((movie, slideIndex) => (
                                <SwiperSlide key={slideIndex}>
                                    <div className="tab-slider__wrapper hover-scale flex relative">
                                        <div className="tab-slider__image hover-scale-up w-full overflow-hidden">
                                            <Image
                                                src={`https://simkl.in/posters/${movie.poster}_m.webp`}
                                                alt={`Movie poster ${slideIndex + 1}`}
                                                className="image--wrapper shrink-0"
                                                loading="lazy"
                                                fallback="/src/assets/react.svg"
                                                aspectRatio="3/4"
                                            />
                                        </div>
                                        <div className="tab-slider__meta">
                                            <a className="movie-title m-0" href={`/movie-details/${movie.ids.simkl_id}`}>
                                                {movie.title}
                                            </a>
                                            <p className='movie-ratings m-0'>
                                              
                                                <RiStarFill size={16} color='#f5b50a' /> <span className='rating-score'>{movie.ratings.simkl.rating}</span> /10
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )
                ))}
            </div>
        </>
    );
}
