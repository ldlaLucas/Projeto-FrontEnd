import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import HomePage from "../pages/HomePage";
import ProductListingPage from "../pages/ProductListinPage";
import ProductViewPage from "../pages/ProductViewPage";
import "../styles.css";

// Componente para página 404
const NotFound = () => {
  const navigate = useNavigate(); // Hook useNavigate para navegação

  return (
    <div className="NotFound">
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <button
        className="NotFoundButton"
        onClick={() => navigate("/")} // Redireciona para a página inicial
        onMouseEnter={(e) => (e.target.style.backgroundColor = "var(--dark-gray-2)")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "var(--primary)")}
      >
        Voltar para Home
      </button>
    </div>
  );
};

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
