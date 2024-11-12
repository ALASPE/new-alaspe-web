import React from "react";
import ImageSlider from "./components/Slider";
import Popup from "./components/Popup";

const images = [
  "/slider/Slider1@10x.png",
  "/slider/Slider2@10x.png",
  "/slider/1.jpg",
  "/slider/2.jpg",
  "/slider/3.jpg",
  "/slider/4.jpg",
  "/slider/5.jpg",
  "/slider/8.jpg",
  "/slider/9.jpg",
  "/slider/10.jpg",
  "/slider/11.jpg",
];

export default function HomePage() {
  return (
    <>
      <Popup />
      <div className="flex flex-col items-center">
        <ImageSlider images={images} interval={3000} />
      </div>
    </>
  );
}
