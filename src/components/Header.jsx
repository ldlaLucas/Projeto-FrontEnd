import React, { useState } from "react";
import "../styles/Header.css";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Badge } from "primereact/badge";
import "primereact/resources/themes/lara-light-pink/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import logo from "../assets/logo-header.svg";
import Navbar from "./NavBar/NavBar";

const Header = () => {
  // Simulando a quantidade de produtos no carrinho
  const [cartCount, setCartCount] = useState(0);

  return (
    <header className="header-container">
      <div className="flex justify-content-between align-items-center header-top">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="search-container p-input-icon-right">
          <i className="pi pi-search" />
          <InputText
            placeholder="Pesquisar produtos..."
            className="search-input"
          />
        </div>
        <div className="flex align-items-center gap-3 buttons-container">
          <Button
            label="Cadastre-se"
            className="p-button-text button-signup"
            onClick={() => {}}
          />
          <button className="button-primary" onClick={() => {}}>
            Entrar
          </button>
          <div className="cart-container">
            <i className="pi pi-shopping-cart cart-icon" />
            {cartCount > 0 && (
              <Badge
                value={cartCount}
                className="cart-badge"
              />
            )}
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
