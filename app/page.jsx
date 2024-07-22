import React from 'react';
import Popup from './components/Popup';
import SwiperCarousel from './components/Slider';

export default function HomePage() {
  return (
    <>
      <div className="w-full max-w-auto relative">
        <SwiperCarousel />
        <Popup />
      </div>
    </>
  );
}
