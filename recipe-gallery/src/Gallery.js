import React, { useState } from "react";
import { images } from "./imageList";
import "./Gallery.css"; // Import your CSS

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="gallery-container">
      <h1>Recipe Gallery</h1>
      <img
        src={images[currentIndex].url}
        alt={images[currentIndex].description}
        className="gallery-image"
      />
      <p className="gallery-description">{images[currentIndex].description}</p>
      <div className="gallery-buttons">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="gallery-button gallery-button-prev"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === images.length - 1}
          className="gallery-button gallery-button-next"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Gallery;
