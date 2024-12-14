import React, { useState } from "react";
import "../styles.css";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const tabs = ["Home", "Produtos", "Categorias", "Meus Pedidos"];

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {tabs.map((tab) => (
          <li
            key={tab}
            className={`navbar-item ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
