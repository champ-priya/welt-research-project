import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Import images from src/assets
import greenFutureImage from "../assets/green_future.jpeg";
import researchImage from "../assets/research.webp";
import technologyImage from "../assets/technology.jpeg";

// Import icons (You may use a library like react-icons)
import { FaCode, FaDatabase, FaLeaf, FaRobot, FaShieldAlt, FaStethoscope, FaTree } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b from-green-50 to-green-100 text-gray-800">
      <div className="container mx-auto py-16 px-6">
        <h1 className="text-5xl font-bold text-center text-green-800 mb-10">
          About Us
        </h1>
        <p className="text-xl text-center mb-12 leading-relaxed">
          Welt Research Pvt. Ltd. is a registered private limited company established for research and experimental development on natural sciences and research. We are focused on exploration and innovations for making society better. We are keen on working for a green & sustainable future and solving socio-scientific problems to create a society where no one is left behind, a society with “Prosperity and Happiness Together”.
        </p>

        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          className="mb-12 shadow-lg rounded-lg overflow-hidden"
        >
          <div className="relative h-80 md:h-96 lg:h-108 xl:h-120">
            <img 
              src={researchImage} 
              alt="Research" 
              className="w-full h-full object-cover object-center"
            />
            <p className="legend text-green-800 bg-white bg-opacity-75">Research & Innovation</p>
          </div>
          <div className="relative h-80 md:h-96 lg:h-108 xl:h-120">
            <img 
              src={greenFutureImage} 
              alt="Green Future" 
              className="w-full h-full object-cover object-center"
            />
            <p className="legend text-green-800 bg-white bg-opacity-75">Green & Sustainable Future</p>
          </div>
          <div className="relative h-80 md:h-96 lg:h-108 xl:h-120">
            <img 
              src={technologyImage} 
              alt="Technology" 
              className="w-full h-full object-cover object-center"
            />
            <p className="legend text-green-800 bg-white bg-opacity-75">Technological Solutions</p>
          </div>
        </Carousel>

        <h2 className="text-3xl font-semibold text-green-800 mb-8 text-center">
          Our Focus Areas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="focus-area-card">
            <div className="icon-container">
              <FaTree className="text-green-700 text-4xl mb-4" />
            </div>
            <h3 className="text-xl font-bold mb-2">Pollution and Climate Change</h3>
            <p className="text-gray-700">We develop solutions to combat pollution and mitigate the impacts of climate change for a healthier planet.</p>
          </div>
          <div className="focus-area-card">
            <div className="icon-container">
              <FaLeaf className="text-green-700 text-4xl mb-4" />
            </div>
            <h3 className="text-xl font-bold mb-2">Agriculture and Food Security</h3>
            <p className="text-gray-700">Innovating in agriculture to ensure food security and sustainability for future generations.</p>
          </div>
          <div className="focus-area-card">
            <div className="icon-container">
              <FaStethoscope className="text-green-700 text-4xl mb-4" />
            </div>
            <h3 className="text-xl font-bold mb-2">Medical Instrumentation</h3>
            <p className="text-gray-700">Designing advanced medical instruments to improve healthcare accessibility and quality.</p>
          </div>
          <div className="focus-area-card">
            <div className="icon-container">
              <FaDatabase className="text-green-700 text-4xl mb-4" />
            </div>
            <h3 className="text-xl font-bold mb-2">Big Data Management</h3>
            <p className="text-gray-700">Managing and analyzing big data to drive insights and inform strategic decisions.</p>
          </div>
          <div className="focus-area-card">
            <div className="icon-container">
              <FaShieldAlt className="text-green-700 text-4xl mb-4" />
            </div>
            <h3 className="text-xl font-bold mb-2">Defence Technologies</h3>
            <p className="text-gray-700">Innovating in defense technology to ensure national security and resilience.</p>
          </div>
          <div className="focus-area-card">
            <div className="icon-container">
              <FaCode className="text-green-700 text-4xl mb-4" />
            </div>
            <h3 className="text-xl font-bold mb-2">Computer Modelling</h3>
            <p className="text-gray-700">Utilizing computer models to simulate real-world scenarios for better decision-making.</p>
          </div>
          <div className="focus-area-card">
            <div className="icon-container">
              <FaRobot className="text-green-700 text-4xl mb-4" />
            </div>
            <h3 className="text-xl font-bold mb-2">Simulations, AI & ML, IoT, Software Solutions</h3>
            <p className="text-gray-700">Leveraging cutting-edge technologies like AI, ML, and IoT to build innovative software solutions.</p>
          </div>
        </div>
      </div>

      <div className="bg-green-200 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-green-800 mb-4">
            Join Us in Making a Difference
          </h2>
          <p className="text-lg mb-8">
            We believe in a future where technology and innovation pave the way for a better, more sustainable world. Join us in our mission to create a society with “Prosperity and Happiness Together”.
          </p>
          <button className="bg-green-600 text-white py-3 px-8 rounded-full hover:bg-green-700 transition duration-300 shadow-lg">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;