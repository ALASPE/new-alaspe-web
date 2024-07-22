"use client";

import { useState, useRef } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

export default function AudioPlayer({ src, title }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    setProgress((audio.currentTime / audio.duration) * 100);
  };

  return (
    <div className="w-full p-4 bg-green-100 rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
      <div className="flex items-center justify-between">
        <button
          onClick={togglePlayPause}
          className="p-2 bg-green-700 text-white rounded-full shadow-md hover:bg-green-800 transition duration-300"
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <div className="w-full h-2 bg-gray-300 rounded-full mx-4">
          <div
            className="h-2 bg-green-700 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      ></audio>
    </div>
  );
}
