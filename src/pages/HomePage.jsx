import Section from "../components/Section/Section";
import ProductListing from "../components/ProductListing";
import Layout from "../components/layout/Layout";
import "primeflex/primeflex.css";
import Gallery from "../components/gallery/Gallery";

const HomePage = () => {
  const produtos = [
    {
      name: "Produto 1",
      image: "../src/assets/products/produc-image-1.jpeg",
      price: 200,
      priceDiscount: 149.9,
    },
    {
      name: "Produto 2",
      image: "../src/assets/products/produc-image-2.jpeg",
      price: 49.9,
    },
    {
      name: "Produto 3",
      image: "../src/assets/products/produc-image-3.jpeg",
      price: 100,
      priceDiscount: 89.9,
    },
    {
      name: "Produto 4",
      image: "../src/assets/products/produc-image-4.jpeg",
      price: 100,
      priceDiscount: 89.9,
    },
    {
      name: "Produto 5",
      image: "../src/assets/products/produc-image-4.jpeg",
      price: 100,
      priceDiscount: 89.9,
    },
    {
      name: "Produto 6",
      image: "../src/assets/products/produc-image-3.jpeg",
      price: 100,
      priceDiscount: 89.9,
    },
    {
      name: "Produto 7",
      image: "../src/assets/products/produc-image-4.jpeg",
      price: 100,
      priceDiscount: 89.9,
    },
    {
      name: "Produto 8",
      image: "../src/assets/products/produc-image-4.jpeg",
      price: 100,
      priceDiscount: 89.9,
    },
  ];
  return (
    <div>
      <Layout>
        <Gallery
          width="1440px"
          height="681px"
          radius="4px"
          showThumbs
          images={[
            // {src:'../../../public/.png'},
            { src: "../../../public/collection-1.png" },
            { src: "../../../public/collection-2.png" },
            { src: "../../../public/collection-3.png" },
          ]}
        />
        <Section
          title="Coleções em Destaque"
          link={{ text: "Show More", href: "https://redirect.link" }}
        />
          <ProductListing products={produtos} />

    </Layout>
    </div>
  );
};

export default HomePage;
