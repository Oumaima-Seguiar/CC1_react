import React, { useState } from 'react';
import { SliderData } from './SliderData';
 import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';


 import { FaIconName } from 'react-icons/fa';


import './sld.css';








const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  // Check if slides is undefined or an empty array
  if (!Array.isArray(slides) || slides.length === 0) {
    return null; // Render nothing if slides are empty or undefined
  }

  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='' className='image' />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;

