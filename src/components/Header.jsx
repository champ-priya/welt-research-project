import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [language, setLanguage] = useState('EN'); // Default language is English

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'FR' : 'EN'); // Toggle between English and French
  };

  return (
    <nav className="bg-white shadow-lg ">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo and Company Name */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Company Logo" className="w-12 h-12" />
          <span className="text-2xl font-bold text-gray-800">
            Welt Research Pvt Ltd
          </span>
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-8">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Language Toggle */}
        <button
          className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:ring-2 focus:ring-blue-400"
          onClick={toggleLanguage}
        >
          {language}
        </button>
      </div>

      {/* Navigation Links */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-10 text-red-500">
            <div className="hover:text-blue-500">
              <Link to="/events">Events</Link>
            </div>
            <div className="hover:text-blue-500">
              <Link to="/news">News Stories & Speeches</Link>
            </div>
            <div className="hover:text-blue-500">
              <Link to="/get-involved">Get Involved</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
