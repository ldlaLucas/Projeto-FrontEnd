import Header from "../components/Header";
import Footer from "../components/Footer";
import Gallery from "../components/gallery/Gallery";
import ProductCard from "../components/ProductCard";
import ProductListinPage from "./ProductListinPage";

const HomePage = () => {
  return (
    <>
      <Header />
      <div>
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
        <div className="app flex ">
          <ProductCard
            image="src/assets/products/produc-image-1.jpeg"
            name="Produto Exemplo"
            price="R$ 200,00"
            priceDiscount="R$ 150,00"
          />
          <ProductCard
            image="src/assets/products/produc-image-2.jpeg"
            name="Produto Exemplo"
            price="R$ 200,00"
            priceDiscount="R$ 150,00"
          />
          <ProductCard
            image="src/assets/products/produc-image-3.jpeg"
            name="Produto Exemplo"
            price="R$ 200,00"
            priceDiscount="R$ 150,00"
          />
        </div>
      </div>
      <ProductListinPage />
      <Footer />
    </>
  );
};

export default HomePage;
