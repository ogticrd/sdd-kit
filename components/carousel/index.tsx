import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';

import { Autoplay, Pagination } from 'swiper/modules';

export interface ICarouselProps {
  childrens: React.ReactNode[];
  delayAutoplay?: number;
}

export const Carousel = ({ childrens, delayAutoplay }: ICarouselProps) => {
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
      {childrens && childrens.map((children: any, index: number) => (
        <SwiperSlide key={index}>{children}</SwiperSlide>
      ))}
    </Swiper>
  );
}
