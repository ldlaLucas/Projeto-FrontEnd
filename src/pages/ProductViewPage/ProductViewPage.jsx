import React from "react";
import Layout from "../../components/layout/Layout";
import Gallery from "../../components/gallery/Gallery";
import BuyBox from "../../components/BuyBox";
import Section from "../../components/Section/Section";
import ProductListing from "../../components/ProductListing";
import "./ProductViewPage.css"; // CSS específico para ajustes da página

const ProductViewPage = () => {
  // Dados fictícios para teste
  const productImages = [
    { src: "/product-image-1.png" },
    { src: "/product-image-2.png" },
  ];

  const productDetails = {
    name: "Produto Exemplo",
    reference: "REF12345",
    stars: 4.5,
    rating: 120,
    price: 200.0,
    priceDiscount: 149.9,
    description: "Este é um excelente produto com diversas funcionalidades.",
  };

  const productOptions = ["39", "40", "41", "42"];

  const recommendedProducts = [
    {
      name: "Produto Recomendado 1",
      image: "/product-thumb-1.png",
      price: 150,
      priceDiscount: 120,
    },
    {
      name: "Produto Recomendado 2",
      image: "/product-thumb-2.png",
      price: 70,
    },
  ];

  return (
    <>
      <div className="product-view-page">
        <div className="product-details-container">
          {/* Galeria */}
          <Gallery
            images={productImages}
            showThumbs
            width="700px"
            height="570px"
            radius="4px"
          />
          {/* Buy Box */}
          <BuyBox
            name={productDetails.name}
            reference={productDetails.reference}
            stars={productDetails.stars}
            rating={productDetails.rating}
            price={productDetails.price}
            priceDiscount={productDetails.priceDiscount}
            description={productDetails.description}
          >
            <ProductOptions
              options={productOptions}
              radius="8px"
              shape="square"
              type="text"
            />
          </BuyBox>
        </div>
        {/* Produtos Recomendados */}
        <Section
          title="Produtos Recomendados"
          titleAlign="left"
          link={{ text: "Ver todos", href: "/products" }}
        >
          <ProductListing products={recommendedProducts} />
        </Section>
      </div>
    </>
  );
};

export default ProductViewPage;
