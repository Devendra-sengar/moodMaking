// src/Background.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Background = () => {

  return (
    <div className="absolute top-0 left-0 w-full h-full z-[-1] overflow-hidden">
      {/* Background Image */}
      <img
        src="https://thumbs.dreamstime.com/b/magnificent-seychelles-maldives-mood-luxury-getaway-place-palm-trees-sea-water-neural-network-generated-art-270061089.jpg"
        alt="Soft Motion Graphics"
        className="object-cover w-full h-full "
      />

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-teal-300/30 to-blue-900/50"></div>

      {/* Website Name */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-white text-4xl sm:text-6xl font-semibold z-10">
        ZenWell
      </div>
      
      
      {/* Calming Quote */}
      <div className="absolute top-24 left-1/2 transform -translate-x-1/2 text-white text-lg sm:text-2xl text-center font-light z-10 px-4">
        "Breathe in peace, breathe out stress."
      </div>
    </div>
  );
};

export default Background;
