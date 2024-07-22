"use client";

import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function Collapsible({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full mb-4">
      <button
        onClick={toggleOpen}
        className="flex justify-between items-center w-full p-4 bg-green-700 text-white rounded-lg shadow-md hover:bg-green-800 transition duration-300"
      >
        <span>{title}</span>
        <span>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
      </button>
      {isOpen && (
        <div className="p-4 bg-green-100 text-gray-700 rounded-lg shadow-md mt-2">
          {content}
        </div>
      )}
    </div>
  );
}
