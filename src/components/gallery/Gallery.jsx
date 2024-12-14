// src/components/Gallery/Gallery.jsx
import React, { useState } from "react";
import "./Gallery.css";
import fleft from "../../assets/icons/arrow-left.svg";
import fRight from "../../assets/icons/arrow-right.svg";

const Gallery = ({
  className = "",
  width = "100%",
  height = "auto",
  radius = "0px",
  showThumbs,
  images = [],
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const selectSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={`gallery ${className}`} style={{ width, height }}>
      {/* Slide principal */}
      <div className="gallery-slide">
        {images.length > 0 && (
          <img
            src={images[currentIndex].src}
            alt={`Slide ${currentIndex + 1}`}
            className="gallery-image"
          />
        )}
        <button
          className="gallery-arrow gallery-arrow-left"
          onClick={prevSlide}
          disabled={currentIndex === 0}
        >
          <img src={fleft} alt="Previous" />
        </button>
        <button
          className="gallery-arrow gallery-arrow-right"
          onClick={nextSlide}
          disabled={currentIndex === images.length - 1}
        >
          <img src={fRight} alt="Next" />
        </button>
      </div>

      {/* Miniaturas */}
      {showThumbs && images.length > 1 && (
        <div className="gallery-thumbnails">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={`Thumbnail ${index + 1}`}
              className={`gallery-thumbnail ${
                currentIndex === index ? "selected" : ""
              }`}
              style={{ borderRadius: radius }}
              onClick={() => selectSlide(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
