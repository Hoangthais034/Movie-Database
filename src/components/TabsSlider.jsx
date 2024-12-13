import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from './Image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../shared/styles/tabslider.css';
import { RiStarFill } from "@remixicon/react";
import { useState } from 'react';
import { Link } from 'react-router';

let tabCounter = 0;

export default function TabsSlider({ title = "Title" }) {
  const [activeTab, setActiveTab] = useState(1);
  const [sliderId] = useState(() => `tab-slider-${++tabCounter}`);

  return (
    <>
      <div className='section-heading flex justify-between items-center'>
        <div className='section__title'>
          <h2 className='h3'>{title}</h2>
        </div>
        <div className='section__btn btn'>
          <Link to="#">View All</Link>
        </div>
      </div>
      <div className="tab-slider-container grid gap-5">
        <div className='tab-slider__control flex justify-between items-center flex-wrap'>
          <ul className={`tab-links flex tab-links-${sliderId}`}>
            <li className={activeTab === 1 ? "active" : ""} onClick={() => setActiveTab(1)}><a href="#tab1">#Popular</a></li>
            <li className={activeTab === 2 ? "active" : ""} onClick={() => setActiveTab(2)}><a href="#tab2"> #Coming soon</a></li>
            <li className={activeTab === 3 ? "active" : ""} onClick={() => setActiveTab(3)}><a href="#tab3">  #Top rated  </a></li>
            <li className={activeTab === 4 ? "active" : ""} onClick={() => setActiveTab(4)}><a href="#tab4"> #Most reviewed</a></li>                        
          </ul>
          <div className={`tabs-swiper-pagination tabs-pagination-${sliderId}`}></div>
        </div>
        {[...Array(4)].map((_, index) => (
          activeTab === index + 1 && (
            <Swiper
              key={index}
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={6}
              navigation={false}
              pagination={{
                clickable: true,
                el: `.tabs-pagination-${sliderId}`,
              }}
              loop={true}
              breakpoints={{
                320: {
                  slidesPerView: 2,
                  spaceBetween: 10
                },
                480: {
                  slidesPerView: 3,
                  spaceBetween: 15
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 20
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 25
                },
                1280: {
                  slidesPerView: 6,
                  spaceBetween: 30
                }
              }}
              data-tab={`tab${index + 1}`}
            >
              {[...Array(12)].map((_, slideIndex) => (
                <SwiperSlide key={slideIndex}>
                  <div className="tab-slider__wrapper flex relative">
                    <div className="tab-slider__image w-full">
                      <Image
                        src={`/poster1.jpg`}
                        alt={`Movie poster ${slideIndex + 1}`}
                        className="image--wrapper shrink-0"
                        loading="eager"
                        fallback="/src/assets/react.svg"
                        aspectRatio="3/4"
                      />
                    </div>
                    <div className="tab-slider__meta">
                      <p className="movie-title m-0">
                        The revenant
                      </p>
                      <p className='movie-ratings m-0'>
                        <RiStarFill size={16} color='#f5b50a' /> <span className='rating-score'>7.4</span> /10
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
