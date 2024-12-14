import React from 'react';
import PropTypes from 'prop-types';
import '../styles.css';

const ProductCard = ({ image, name, price, priceDiscount }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <div className="product-prices">
          {priceDiscount ? (
            <>
              <span className="price original-price">{price}</span>
              <span className="price discounted-price">{priceDiscount}</span>
            </>
          ) : (
            <span className="price">{price}</span>
          )}
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  priceDiscount: PropTypes.string,
};

export default ProductCard;
