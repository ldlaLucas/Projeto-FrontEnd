import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Section from '../components/Section/Section';
import ProductListing from '../components/ProductListing';
import FilterGroup from '../components/FilterGroup';
import '../styles.css'; // Certifique-se de que os estilos estão no App.css

const ProductListingPage = () => {
  const [products, setProducts] = useState([
    {
      name: "Nome do produto 1",
      image: "public/product-thumb-1.png",
      price: 200,
      priceDiscount: 149.9,
    },
    {
      name: "Nome do produto 2",
      image: "public/product-thumb-2.png",
      price: 49.9,
    },
    // Mais produtos aqui
  ]);

  const [sortOrder, setSortOrder] = useState('');

  const [filters, setFilters] = useState({});

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
    // Ordenar a lista de produtos com base na escolha
    const sortedProducts = [...products].sort((a, b) => {
      if (event.target.value === 'Menor preço') return a.price - b.price;
      if (event.target.value === 'Maior preço') return b.price - a.price;
      return 0;
    });
    setProducts(sortedProducts);
  };

  return (
    <>
      <div className="product-listing-page" style={{ display: 'flex', gap: '20px', padding: '20px' }}>
        {/* Sidebar com filtros e ordenação */}
        <aside style={{ width: '308px' }}>
          {/* Ordenar por */}
          <div className="sort-by" style={{ marginBottom: '20px' }}>
            <label htmlFor="sort-order" style={{ color: 'var(--dark-gray-2)', fontSize: '16px', display: 'block', marginBottom: '10px' }}>
              Ordenar por
            </label>
            <select
              id="sort-order"
              onChange={handleSortChange}
              style={{ width: '100%', height: '60px', fontSize: '16px', color: 'var(--dark-gray-2)' }}
            >
              <option value="">Selecione</option>
              <option value="Menor preço">Menor preço</option>
              <option value="Maior preço">Maior preço</option>
            </select>
          </div>

          {/* Filtrar por */}
          <div className="filter-by" style={{ background: 'var(--white)', padding: '20px', borderRadius: '8px' }}>
            <h3 style={{ color: 'var(--dark-gray-2)', fontSize: '16px', marginBottom: '10px' }}>Filtrar por</h3>
            <hr style={{ border: 'none', borderTop: '1px solid var(--light-gray-2)', margin: '10px 0' }} />
            <FilterGroup
              title="Categoria"
              inputType="checkbox"
              options={[
                { text: "Opção 1", value: "opt1" },
                { text: "Opção 2" },
                { text: "Opção 3", value: "opt3" },
              ]}
            />
          </div>
        </aside>

        {/* Lista de produtos */}
        <main style={{ flex: 1 }}>
          <Section title={`${products.length} produtos encontrados`} titleAlign="left">
            <ProductListing products={products} />
          </Section>
        </main>
      </div>
    </>
  );
};

export default ProductListingPage;
