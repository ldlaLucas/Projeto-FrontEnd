import React from "react";
import Gallery from "../components/Gallery";
import BuyBox from "../components/BuyBox";
import ProductOptions from "../components/ProductOpitions";
import Section from "../components/Section/Section";
import ProductListing from "../components/ProductListing";
import "../styles.css";

const ProductViewPage = () => {
  const galleryImages = [
    { src: "../src/assets/products/produc-image-1.jpeg" },
    { src: "../src/assets/products/produc-image-2.jpeg" },
    { src: "../src/assets/products/produc-image-3.jpeg" },
    { src: "../src/assets/products/produc-image-4.jpeg" },
  ];

  const recommendedProducts = [
    {
      name: "Nome do produto 1",
      image: "../public/product-thumb-1.jpeg",
      price: 200,
      priceDiscount: 149.9,
    },
    {
      name: "Nome do produto 2",
      image: "../public/product-thumb-2.jpeg",
      price: 49.9,
    },
    {
      name: "Nome do produto 3",
      image: "../public/product-thumb-3.jpeg",
      price: 60.99,
    },
  ];

  return (
   <>

      {/* Conteúdo Principal */}
      <main className="pvp-container" style={{ display: "flex", gap: "32px" }}>
        {/* Galeria */}
        <Gallery
          images={galleryImages}
          showThumbs
          width="700px"
          height="570px"
          radius="4px"
        />

        {/* BuyBox */}
        <BuyBox
          name="Tênis Esportivo"
          reference="REF12345"
          stars={4.5}
          rating={89}
          price={300}
          priceDiscount={249.9}
          description="Tênis esportivo confortável, ideal para corridas e caminhadas. Disponível em várias cores e tamanhos."
        >
          <ProductOptions
            options={["39", "40", "41", "42", "43"]}
            shape="square"
            radius="4px"
            type="text"
          />
          <ProductOptions
            options={["#000", "#111", "#888", "#FFF"]}
            shape="circle"
            type="color"
          />
          <button className="pvp-buy-button">COMPRAR</button>
        </BuyBox>
      </main>

      {/* Produtos Recomendados */}
      <Section
        title="Produtos Recomendados"
        titleAlign="esquerda"
        link={{ text: "Ver todos", href: "/products" }}
      >
        <ProductListing products={recommendedProducts} />
      </Section>
    </>
  );
};

export default ProductViewPage;
