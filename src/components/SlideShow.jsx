import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from '../components/Image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../shared/styles/slideshow.css';
import { RiHeartFill, RiPlayFill, RiStarFill } from "@remixicon/react";



export default function SlideShow() {
  return (
    <div className="slideshow-container">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ 
          clickable: true,
          el: '.swiper-pagination'
        }}
        loop={true}
      >
        <SwiperSlide>
          <div className='slideshow__wrapper flex'>
            <div className='slideshow__contents md:w-8/12 w-full'>
              <div className='slideshow__movie-tags movie-tags flex gap-2'>
                <span class="blue">Sci-fi</span>
                <span class="yell">Action</span>
                <span class="orange">Advanture</span>
              </div>
              <div className='slideshow__movie-name'>
                <h2 className='h1 text-upper'>
                  guardians of the galaxy
                  <span className='movie-time-release'>2015</span>
                </h2>
              </div>
              <div className='slideshow__movie-atc flex flex-wrap'>
                  <a href="#" className="social-btn" tabindex="0">
                    <div className='icon'><RiPlayFill size={16} /> </div>Watch Trailer
                  </a>
                  <a href="#" className="social-btn" tabindex="0">
                    <div className='icon'><RiHeartFill size={16} /> </div>Add to Favorite
                  </a>
              </div>
              <div className='slideshow__movie-meta flex items-end flex-wrap'>
                <ul className="movie-infor m-0 flex items-end flex-wrap">
                  <li className='relative'>  <RiStarFill size={16} color='#f5b50a' /><span className='rating-score'>7.4</span> /10 </li>
                  <li className='relative'>  Run Time: 2h21’ </li>
                  <li className='relative'>  Rated: PG-13  </li>
                  <li className='relative'>  Release: 1 May 2015</li>
                </ul>
              </div>
              <div className='slideshow__movie-button'>
              
              </div>
            </div>
            <div className='slideshow__image w-4/12 hidden md:block'>
              <Image
                src="/poster1.jpg"
                alt="Movie poster"
                className="image--wrapper shrink-0"
                loading="eager"
                fallback="/src/assets/react.svg"
                aspectRatio="adapt"
              />
            </div>
          </div>
        </SwiperSlide>
        {/* Custom Navigation Buttons */}
        <div className="swiper-button swiper-button-prev hidden lg:block">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="swiper-button swiper-button-next hidden lg:block">
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
