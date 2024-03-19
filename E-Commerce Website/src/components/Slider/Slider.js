import React from 'react';
import "./Slider.scss"; // Import your SCSS file for styling
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { sliderImages } from '../../utils/images'; // Import your slider images

const Slider = () => {
  return (
    <div className="hero-slider">
      {sliderImages.map((image, index) => (
        <div className='hero-slider-item' key={index}>
          <img src={image} alt={`Slide ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default Slider;
