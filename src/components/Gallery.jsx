// src/components/Gallery/Gallery.jsx
import React, { useState } from "react";
import "../styles/Gallery.css";
import fleft from "../assets/icons/arrow-left.svg";
import fRight from "../assets/icons/arrow-right.svg";

const Gallery = ({
  className = "",
  width = "100%",
  height = "auto",
  radius = "0px",
  showThumbs,
  images = [],
}) => {
  const [Imagem, setImagem] = useState(0);

  const nextSlide = () => {
    if (Imagem < images.length - 1) {
      setImagem(Imagem + 1);
    }
  };

  const prevSlide = () => {
    if (Imagem > 0) {
      setImagem(Imagem - 1);
    }
  };

  const selectSlide = (index) => {
    setImagem(index);
  };

  return (
    <div className={`gallery ${className}`} style={{ width, height }}>
      {/* Slide principal */}
      <div className="gallery-slide">
        {images.length > 0 && (
          <img
            src={images[Imagem].src}
            alt={`Slide ${Imagem + 1}`}
            className="gallery-image"
          />
        )}
        <button
          className="gallery-arrow gallery-arrow-left"
          onClick={prevSlide}
          disabled={Imagem === 0}
        >
          <img src={fleft} alt="Previous" />
        </button>
        <button
          className="gallery-arrow gallery-arrow-right"
          onClick={nextSlide}
          disabled={Imagem === images.length - 1}
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
                Imagem === index ? "selected" : ""
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
