import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Dropdown component
const Dropdown = ({ title, items, onToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    onToggle(!isOpen); // Notify parent about dropdown toggle
  };

  return (
    <div className="relative group">
      <button
        onClick={handleClick}
        className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        {title}
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 bg-green-800 rounded shadow-lg p-2 flex space-x-4 text-white">
          <ul className="flex space-x-4">
            {items.map((item, index) => (
              <li key={index} className="px-4 py-2 hover:bg-green-600 rounded">
                <Link to={item.link}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// BigBar component
const BigBar = ({ onDropdownToggle }) => {
  // Items for "What We Do" dropdown
  const whatWeDoItems = [
    { label: 'Climate Change', link: '/pollution' },
    { label: 'Agriculture & Food Security', link: '/agriculture' },
    { label: 'Medical Instruments', link: '/medical' },
    { label: 'Big Data Management', link: '/big-data' },
    { label: 'Defence Technologies', link: '/defence' },
    { label: 'Computer Modelling', link: '/modelling' },
    { label: 'Simulations', link: '/simulations' },
    { label: 'AI & ML', link: '/ai-ml' },
    { label: 'IoT', link: '/iot' },
    { label: 'Software Solutions', link: '/software' },
  ];

  // Items for "Who We Are" dropdown
  const whoWeAreItems = [
    { label: 'About Us', link: '/about' },
    { label: 'Contact Us', link: '/contact' },
    { label: 'Services', link: '/services' },
  ];

  return (
    <div className="bg-green-600 py-4">
      <div className="container mx-auto flex justify-around items-center space-x-10">
        {/* Dropdowns */}
        <Dropdown title="What We Do" items={whatWeDoItems} onToggle={onDropdownToggle} />
        <Dropdown title="Who We Are" items={whoWeAreItems} onToggle={onDropdownToggle} />

        {/* Non-Dropdown Link */}
        <Link to="/publications" className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-600">
          Publications & Data
        </Link>
      </div>
    </div>
  );
};

export default BigBar;
