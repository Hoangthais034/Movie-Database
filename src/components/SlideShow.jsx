import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from '../components/Image';

// import required modules
import { Navigation, Pagination, Keyboard } from 'swiper/modules';

export default function SlideShow() {
  return (
    <>
      <Swiper
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='slideshow__wrapper'>
            <Image
              src="/slider-bg2.jpg"
              alt="Movie poster"
              className="image--wrapper shrink-0"
              loading="eager"
              fallback="/src/assets/react.svg"
            />
            
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
