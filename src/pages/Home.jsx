import React, { useState } from 'react';
import TextAnimation from '../components/TextAnimation';
import BigBar from '../components/BigBar';
import image from '../assets/pic.jpg';

export default function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = (isOpen) => {
    setIsDropdownOpen(isOpen); // Update the state based on dropdown open or close
  };

  return (
    <div>
      {/* BigBar with dropdown state handler */}
      <BigBar onDropdownToggle={handleDropdownToggle} />
      
      {/* Hero Section */}
      <div className={`relative transition-all duration-300 ${isDropdownOpen ? 'mt-24' : 'mt-0'}`}>
        <img
          src={image}
          alt="Research and Innovation"
          className="w-full h-[500px] object-cover" // Setting the image size
        />
        <div className="absolute inset-10 flex justify-center items-center bg-black bg-opacity-80">
          <TextAnimation /> {/* Text animation component over the image */}
        </div>
      </div>
    </div>
  );
}
