import ProductListing from "../components/ProductListing";

const Products = [
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
];

const ProductListinPage = () => {
  return (
    <>
      <div>
        <ProductListing products={Products} />
      </div>
    </>
  );
};

export default ProductListinPage;
