import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FetchingMovie } from '../services/FetchingMovie';

import Image from './Image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Navigation, Thumbs } from 'swiper/modules';
import '../shared/styles/slide-trailers.css';

const slides = [
  "https://plus.unsplash.com/premium_photo-1701693533734-bc279bdd0c80?q=80&w=2664",
  "https://plus.unsplash.com/premium_photo-1701693533734-bc279bdd0c80?q=80&w=2664",
  "https://plus.unsplash.com/premium_photo-1701693533734-bc279bdd0c80?q=80&w=2664",
  "https://plus.unsplash.com/premium_photo-1701693533734-bc279bdd0c80?q=80&w=2664",
  "https://plus.unsplash.com/premium_photo-1701693533734-bc279bdd0c80?q=80&w=2664",
];


export default function SlideTrailer({dataType, dataObject, dataInterval, totalItems}) {
// 
  const [movies, setMovies] = useState([]);

  const fetchMovies = async (type, object, interval, limit) => {
    const data = await FetchingMovie(type, object, interval, limit);
    setMovies(data);
    console.log(data);
  };

  useEffect(() => {
    fetchMovies(dataType, dataObject, dataInterval, totalItems);
  }, [dataType, dataObject, dataInterval, totalItems]);


  // 

  const [imagesNavSlider, setImagesNavSlider] = useState(null);
  return (
      <div className="slide-trailer">
        <div className="slide-trailer__flex">
          <div className="slide-trailer__images">
            <Swiper
              thumbs={{ swiper: imagesNavSlider }}
              direction="horizontal"
              slidesPerView={1}
              spaceBetween={32}
              mousewheel={true}
              navigation={{
                nextEl: ".slide-trailer__next",
                prevEl: ".slide-trailer__prev"
              }}
              breakpoints={{
                0: {
                  direction: "horizontal"
                },
                768: {
                  direction: "horizontal"
                }
              }}
              className="swiper-container2"
              modules={[Navigation, Thumbs]}
            >
              {slides.map((slide, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="slide-trailer__image">
                    <Image
              src={slide}
              alt={`Thumbnail ${index + 1}`}
              className="image--wrapper shrink-0"
              loading="lazy"
              fallback="/src/assets/react.svg"
              aspectRatio="adapt"
            />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="slide-trailer__col">
            <div className="slide-trailer__prev">Prev</div>

            <div className="slide-trailer__thumbs">
              <Swiper
                onSwiper={setImagesNavSlider}
                direction="vertical"
                spaceBetween={24}
                slidesPerView={3}
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
                {slides.map((slide, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="slide-trailer__image">
                      <Image
              src={slide}
              alt={`Thumbnail ${index + 1}`}
              className="image--wrapper shrink-0"
              loading="lazy"
              fallback="/src/assets/react.svg"
              aspectRatio="adapt"
            />
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>

            <div className="slide-trailer__next">Next</div>
          </div>
        </div>
      </div>
  );
}
 