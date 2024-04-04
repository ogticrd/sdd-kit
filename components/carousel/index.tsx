import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';

import { Autoplay, Pagination } from 'swiper/modules';

export interface IPropsCarousel {
  childrens: React.ReactNode[];
  delayAutoplay?: number;
}

export const Carousel = ({ childrens, delayAutoplay }: IPropsCarousel) => {
  return (
    <Swiper
      autoplay={{
        delay: delayAutoplay ? delayAutoplay : 50000,
        disableOnInteraction: true,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      {childrens && childrens.map((children: any) => (
        <SwiperSlide>{children}</SwiperSlide>
      ))}
    </Swiper>
  );
}
