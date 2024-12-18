import "../styles/Footer.css";
import React from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // Tema do PrimeReact
import "primeicons/primeicons.css"; // Biblioteca de ícones PrimeIcons
import "primeflex/primeflex.css"; // PrimeFlex
import logo from "../assets/logo-footer.svg";

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Lado Esquerdo */}
      <div className="footer-section logo-section">
        <img src={logo} alt="Logo" className="footer-logo" />
        <p className="footer-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
        </p>
        <div className="social-icons">
          <i className="pi pi-facebook social-icon" />
          <i className="pi pi-instagram social-icon" />
          <i className="pi pi-twitter social-icon" />
        </div>
      </div>

      {/* Coluna Informações */}
      <div className="footer-section">
        <h3 className="footer-title">Informações</h3>
        <ul className="footer-list">
          <li>Sobre Drip Store</li>
          <li>Segurança</li>
          <li>Wishlist</li>
          <li>Blog</li>
          <li>Trabalhe conosco</li>
          <li>Meus Pedidos</li>
        </ul>
      </div>

      {/* Coluna Categorias */}
      <div className="footer-section">
        <h3 className="footer-title">Categorias</h3>
        <ul className="footer-list">
          <li>Camisetas</li>
          <li>Calcas</li>
          <li>Bonés</li>
          <li>Headphones</li>
          <li>Tenis</li>
        </ul>
      </div>

      {/* Coluna Contato */}
      <div className="footer-section">
        <h3 className="footer-title">Contato</h3>
        <p className="footer-contact">
          Email: contato@exemplo.com <br />
          Telefone: (11) 1234-5678 <br />
          Endereço: Rua Exemplo, 123, Cidade, Estado
        </p>
      </div>

      {/* Rodapé Inferior */}
      <div className="footer-bottom">
        <hr />
        <p>&copy; 2024 GT3-Lucas Augusto</p>
      </div>
    </footer>
  );
};

export default Footer;
