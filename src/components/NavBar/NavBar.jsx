import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const location = useLocation(); // Obtém a rota atual
  const [activeTab, setActiveTab] = useState("Home"); // Define "Home" como padrão inicial

  const tabs = [
    { name: "Home", route: "/" },
    { name: "Produtos", route: "/products" },
    { name: "Categorias", route: "/categories" },
    { name: "Meus Pedidos", route: "/orders" },
  ];

  useEffect(() => {
    // Encontra a aba correspondente à rota atual
    const currentTab = tabs.find((tab) => tab.route === location.pathname);
    if (currentTab) setActiveTab(currentTab.name);
  }, [location.pathname]); // Atualiza quando a rota muda

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {tabs.map((tab) => (
          <li
            key={tab.name}
            className={`navbar-item ${activeTab === tab.name ? "active" : ""}`}
          >
            <NavLink
              to={tab.route}
              className="navbar-link"
              onClick={() => setActiveTab(tab.name)} // Define a aba ativa ao clicar
            >
              {tab.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
