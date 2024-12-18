import React, { useState } from "react";
import Section from "../components/Section/Section";
import ProductListing from "../components/ProductListing";
import FilterGroup from "../components/FilterGroup";
import { Dropdown } from "primereact/dropdown"; // Substituindo select
import { Divider } from "primereact/divider"; // Substituindo <hr>
import "../styles/ProductListingPage.css";

const ProductListingPage = () => {
  const [products, setProducts] = useState([
   
    {
      name: "Nome do produto 1",
      image: "../../public/product-thumb-1.jpeg",
      price: 200,
      priceDiscount: 149.9,
    },
    {
      name: "Nome do produto 2",
      image: "../../public/product-thumb-2.jpeg",
      price: 49.9,
    },
    {
      name: "Nome do produto 1",
      image: "../../public/product-thumb-1.jpeg",
      price: 200,
      priceDiscount: 149.9,
    },
    {
      name: "Nome do produto 2",
      image: "../../public/product-thumb-2.jpeg",
      price: 49.9,
    },
    {
      name: "Nome do produto 1",
      image: "../../public/product-thumb-1.jpeg",
      price: 200,
      priceDiscount: 149.9,
    },
    {
      name: "Nome do produto 2",
      image: "../../public/product-thumb-2.jpeg",
      price: 49.9,
    },
    {
      name: "Nome do produto 1",
      image: "../../public/product-thumb-1.jpeg",
      price: 200,
      priceDiscount: 149.9,
    },
    {
      name: "Nome do produto 2",
      image: "../../public/product-thumb-2.jpeg",
      price: 49.9,
    },
  ]);

  const [sortOrder, setSortOrder] = useState("");
  const [filters, setFilters] = useState({});

  const handleSortChange = (e) => {
    setSortOrder(e.value);
    const sortedProducts = [...products].sort((a, b) => {
      if (e.value === "Menor preço") return a.price - b.price;
      if (e.value === "Maior preço") return b.price - a.price;
      return 0;
    });
    setProducts(sortedProducts);
  };

  const sortOptions = [
    { label: "Selecione", value: "" },
    { label: "Menor preço", value: "Menor preço" },
    { label: "Maior preço", value: "Maior preço" },
  ];

  return (
    <Section>
     <div class="Section">
      {/* Sidebar com filtros e ordenação */}
      <aside className="col-12 md:col-3">
        {/* Ordenar por */}
        <div className="sort-by mb-4">
          <label htmlFor="sort-order" className="block text-dark-gray-2 text-lg mb-2">
            Ordenar por
          </label>
          <Dropdown
            id="sort-order"
            value={sortOrder}
            options={sortOptions}
            onChange={handleSortChange}
            placeholder="Selecione"
            className="w-full"
          />
        </div>

        {/* Filtrar por */}
        <div className="filter-by p-3 bg-white border-round">
          <h3 className="text-dark-gray-2 text-lg mb-3">Filtrar por</h3>
          <Divider />
          <FilterGroup
            title="Categoria"
            inputType="checkbox"
            options={[
              { text: "Opção 1", value: "opt1" },
              { text: "Opção 2", value: "opt2" },
              { text: "Opção 3", value: "opt3" },
            ]}
          />
        </div>
      </aside>

      {/* Lista de produtos */}
      <main className="col-12 md:col-9">
        <Section title={`${products.length} produtos encontrados`} titleAlign="left">
          <ProductListing products={products} />
        </Section>
      </main>
    </div>
    </Section>
  );
};

export default ProductListingPage;
