"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

export default function SwiperCarousel({ images = [], w, h }) {
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
        {images.map((images, index) => (
          <SwiperSlide key={index}>
            <Image src={images} width={w} height={h} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
