"use client";
import React, { useEffect, useState } from "react";

const messages = [
  "Expert patent drawings for global innovators.",
  "Fast, reliable service for utility, design, and trademark illustrations.",
  "Trusted by inventors, attorneys, and businesses worldwide."
];

const TRANSITION_TIME = 4000; // ms

interface TextCarouselProps {
  id?: string;
}

const TextCarousel: React.FC<TextCarouselProps> = ({ id }) => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const fadeTimeout = setTimeout(() => setFade(false), TRANSITION_TIME - 600);
    const interval = setInterval(() => {
      setFade(true);
      setIndex((prev) => (prev + 1) % messages.length);
    }, TRANSITION_TIME);
    return () => {
      clearInterval(interval);
      clearTimeout(fadeTimeout);
    }; 
  }, [index]);

  return (
  <div id={id} className="w-full flex justify-center items-center py-6">
      <div
        className={`transition-opacity duration-700 text-2xl md:text-3xl font-semibold text-blue-900 text-center max-w-2xl ${fade ? 'opacity-100' : 'opacity-0'}`}
      >
        {messages[index]}
      </div>
    </div>
  );
};

export default TextCarousel;
