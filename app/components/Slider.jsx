"use client";

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

export default function SwiperCarousel() {
  return (
    <div className="w-full relative z-10">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src="/slider/Slider1.svg" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/slider/Slider2.svg" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://via.placeholder.com/1920x600?text=Slide+3" alt="Slide 3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
