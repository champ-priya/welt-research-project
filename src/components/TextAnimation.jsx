import React, { useState, useEffect } from 'react';

const TextAnimation = () => {
  const textArray = [
    'Discover limitless possibilities with our research-driven solutions.',
    'From pioneering innovations to customized R&D services,',
    'we empower businesses to thrive in an ever-evolving landscape.'
  ];

  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Initial delay for the animation to start

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLineIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 4000); // 4 seconds delay between each line

    return () => clearInterval(interval);
  }, [textArray.length]);

  return (
    <div className="text-center mt-20">
      <h1 className="text-5xl font-bold text-green-500 overflow-hidden">
        {isVisible && (
          <span className="inline-block animate-moveLeftRight">
            {textArray[currentLineIndex]}
          </span>
        )}
      </h1>
      
    </div>
  );
};

export default TextAnimation;
