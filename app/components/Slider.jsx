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
          <Image href="/slider/Slider1.svg" alt="Slide 1" width={1920} height={300}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image href="/slider/Slider2.svg" alt="Slide 2" width={1920} height={300}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image href="https://via.placeholder.com/1920x600?text=Slide+3" alt="Slide 3" width={1920} height={300}/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
