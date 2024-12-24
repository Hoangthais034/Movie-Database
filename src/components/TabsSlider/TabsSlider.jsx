import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { RiStarFill } from "@remixicon/react";
import Skeleton from '../../shared/styles/Skeleton';


import './tabslider.jsx';
import { FetchingMovie } from '../../services/FetchMovie';
import Headings from '../../shared/styles/Typo'
import Image from '../Image';
import { FlexBox, GridBox } from '../../shared/styles/LayoutModels/LayoutModels';
import { TabLinks, SectionHeading, SlideWrapper } from './tabslider.jsx';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


let tabCounter = 0;

export default function TabsSlider({ title, dataType, dataObject, dataInterval, totalItems }) {
  
    const [moviesByTab, setMoviesByTab] = useState({});
    const [loading, setLoading] = useState(true);

    const fetchMovies = async (type, objects, interval, limit) => {
      try {
        const objectArray = objects.split(',').map(obj => obj.trim());
        const allMovies = await Promise.all(objectArray.map(object => 
            FetchingMovie(type, object, interval, limit).then(data => ({ [object]: data }))
        ));
        setMoviesByTab(Object.assign({}, ...allMovies));
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
      fetchMovies(dataType, dataObject, dataInterval, totalItems);
    }, []);

    const [activeTab, setActiveTab] = useState(1);
    const [sliderId] = useState(() => `tab-slider-${++tabCounter}`);

    return (
        <>
            <SectionHeading justifyContent="space-between" alignItems="center">
                <div className='section__title'>
                    <Headings as="h2" className='h3'>{title}</Headings>
                </div>
                <div className='section__btn btn'>
                    <Link to="#">View All</Link>
                </div>
            </SectionHeading>
            <GridBox columns={1} gap="2rem">
                <TabLinks flexWrap="wrap" justifyContent="space-between" alignItems="center">
                    <FlexBox element="ul" className={`tab-links tab-links-${sliderId}`}>
                        {dataObject.split(',').map((object, index) => (
                            <li key={index} className={activeTab === index + 1 ? "active" : ""} onClick={() => setActiveTab(index + 1)}>
                                <a href={`#tab${index + 1}`} data-tab={object.trim()}>#{object.trim()}</a>
                            </li>
                        ))}
                    </FlexBox>
                    <div className={`tabs-swiper-pagination tabs-pagination-${sliderId}`}></div>
                </TabLinks>
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
                            {(moviesByTab[dataObject.split(',')[index].trim()] || 
                                Array(6).fill({ title: true })
                            ).map((movie, slideIndex) => (
                                <SwiperSlide key={slideIndex}>
                                    <SlideWrapper className="hover-scale relative">
                                        <div className="tab-slider__image hover-scale-up w-full overflow-hidden">
                                          {loading ? (
                                            <Skeleton className="skeleton-image-posters" />
                                          ) : (
                                            <Image
                                              src={`https://wsrv.nl/?url=https://simkl.in/posters/${movie.poster}_m.webp`}
                                              alt={`Movie poster ${slideIndex + 1}`}
                                              className="image--wrapper shrink-0"
                                              loading="lazy"
                                              fallback="/src/assets/react.svg"
                                              aspectRatio="3/4"
                                            />
                                          )}
                                        </div>
                                        <div className="tab-slider__meta">
                                            {!loading && (
                                              <a className="movie-title m-0" href={`/movie-details/${movie.ids.simkl_id}`}>
                                                  <>{movie.title}</>
                                              </a>
                                            )}
                                            <p className='movie-ratings m-0'>
                                              {!loading && (
                                                <><RiStarFill size={16} color='#f5b50a' /> <span className='rating-score'>{movie.ratings.simkl.rating}</span> /10</>
                                              )}
                                            </p>
                                        </div>
                                    </SlideWrapper>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )
                ))}
            </GridBox>
        </>
    );
}
