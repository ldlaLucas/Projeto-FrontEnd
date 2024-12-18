import React from "react";
import Section from "../components/Section/Section";
import ProductListing from "../components/ProductListing";
import Gallery from "../components/Gallery";

import "primeflex/primeflex.css";
import "../styles/HomePage.css";

const HomePage = () => {
  // Produtos em alta
  const produtosAlta = [
    {
      name: "Produto 1",
      image: "../../public/home-slide-1.jpeg",
      price: 200,
      priceDiscount: 149.9,
    },
    {
      name: "Produto 2",
      image: "../../public/home-slide-2.jpeg",
      price: 49.9,
    },
    {
      name: "Produto 3",
      image: "../../public/home-slide-3.jpeg",
      price: 100,
      priceDiscount: 89.9,
    },
    {
      name: "Produto 4",
      image: "../../public/home-slide-4.jpeg",
      price: 120,
    },
    {
      name: "Produto 5",
      image: "../../public/home-slide-5.jpeg",
      price: 150,
      priceDiscount: 129.9,
    },
    {
      name: "Produto 6",
      image: "../../public/home-slide-6.jpeg",
      price: 250,
    },
    {
      name: "Produto 7",
      image: "../../public/home-slide-7.jpeg",
      price: 299.9,
    },
    {
      name: "Produto 8",
      image: "../../public/home-slide-8.jpeg",
      price: 399.9,
      priceDiscount: 349.9,
    },
  ];

  return (
    <div className="home-page">
      {/* Slide de imagens */}
      <Gallery
        width="100%"
        height="681px"
        radius="8px"
        showThumbs
        images={[
          { src: "../../public/home-slide-1.jpeg" },
          { src: "../../public/home-slide-2.jpeg" },
          { src: "../../public/home-slide-3.jpeg" },
        ]}
      />

      {/* Seção: Coleções em destaque */}
      <Section
        title="Coleções em Destaque"
        titleAlign="center"
        link={{ text: "Ver mais", href: "/colecoes" }}
      >
        <div className="collections-container">
          <img
            src="../../public/collection-1.png"
            alt="Coleção 1"
            className="collection-image"
          />
          <img
            src="../../public/collection-2.png"
            alt="Coleção 2"
            className="collection-image"
          />
          <img
            src="../../public/collection-3.png"
            alt="Coleção 3"
            className="collection-image"
          />
        </div>
      </Section>

      {/* Seção: Produtos em alta */}
      <Section
        title="Produtos em Alta"
        titleAlign="left"
        link={{ text: "Ver todos os produtos", href: "/produtos" }}
      >
        <ProductListing products={produtosAlta} />
      </Section>
    </div>
  );
};

export default HomePage;
