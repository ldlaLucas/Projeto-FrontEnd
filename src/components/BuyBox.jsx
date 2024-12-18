import React from "react";
import "../styles.css";

const BuyBox = ({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children,
}) => {
  return (
    <div className="buy-box">
      {/* Nome do Produto */}
      <h1 className="buy-box-name">{name}</h1>
      {/* Código de Referência */}
      <p className="buy-box-reference">Código: {reference}</p>
      {/* Avaliações */}
      <div className="buy-box-reviews">
        <div className="buy-box-stars">
          <span className="buy-box-stars-text">{stars}</span>
          <img
            src="../src/assets/icons/star-icon.svg"
            alt="Estrela"
            className="buy-box-star-icon"
          />
        </div>
        <span className="buy-box-rating">({rating} avaliações)</span>
      </div>
      {/* Preço e Desconto */}
      <div className="buy-box-pricing">
        {priceDiscount ? (
          <>
            <span className="buy-box-price-original">
              {price ? `R$ ${price.toFixed(2)}` : "Preço indisponível"}
            </span>
            <span className="buy-box-price-discount">
              {`R$ ${priceDiscount.toFixed(2)}`}
            </span>
          </>
        ) : (
          <span className="buy-box-price">
            {price ? `R$ ${price.toFixed(2)}` : "Preço indisponível"}
          </span>
        )}
      </div>
      {/* Descrição */}
      <p className="buy-box-description">{description}</p>
      {/* Opções do Produto */}
      <div className="buy-box-options">{children}</div>
      {/* Botão Comprar */}
      <button className="buy-box-button">Comprar</button>
    </div>
  );
};

export default BuyBox;
