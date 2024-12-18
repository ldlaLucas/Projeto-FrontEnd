import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListingPage from "../pages/ProductListinPage";
import ProductViewPage from "../pages/ProductViewPage/ProductViewPage";
import Layout from "../components/layout/Layout"; // Importando o layout que contém Header/NavBar/Footer
import HomePage from "../pages/HomePage";

// Componente para página 404
const NotFound = () => (
  <div style={{ textAlign: "center", marginTop: "50px" }}>
    <h1>404 Not Found</h1>
    <p>The page you are looking for does not exist.</p>
  </div>
);

const Paths = () => {
  return (
    
    <Router>
      <Routes>
        {/* Páginas com Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListingPage />} />
          <Route path="/categories" element={<ProductViewPage />} />
        </Route>

        {/* Página 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default Paths;
