import "../styles.css"
import React from "react";
import "primereact/resources/themes/mira/theme.css"; // Tema Lara Dark Gray
import "primereact/resources/primereact.min.css"; // Estilos globais do PrimeReact
import "primeicons/primeicons.css"; // Biblioteca de ícones PrimeIcons
import "primeflex/primeflex.css"; // Classes utilitárias PrimeFlex

// Importação da logo
import logo from "../assets/logo-footer.svg";

const Footer = () => {
  return (
    <footer className="flex flex-row justify-content-evenly align-content-center flex-wrap p-px-4px" >
      {/* Lado esquerdo */}
      <div className="p-d-flex p-flex-column p-ai-start w-20">
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          class="logo"
        />
        {/* Lorem Ipsum */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
        </p>
        {/* Ícones de Redes Sociais */}
        <div className="flex flex-row">
          <i className="RdSocial pi pi-facebook p-mr-3" />
          <i className="RdSocial pi pi-instagram p-mr-3" />
          <i className="RdSocial pi pi-twitter" />
        </div>
      </div>

      {/* Centro esquerda */}
      <div className="p-d-flex p-flex-column p-ai-start w-20" >
        <h3 >Informações</h3>
        <ul>
          <li>Sobre Drip Store</li>
          <li>Segurança</li>
          <li>Wishlist</li>
          <li>Blog</li>
          <li>Trabalhe conosco</li>
          <li>Meus Pedidos</li>
        </ul>
      </div>

      {/* Centro direita */}
      <div className="p-d-flex p-flex-column p-ai-start w-20" >
        <h3>Categorias</h3>
        <ul>
          <li>Tecnologia</li>
          <li>Moda</li>
          <li>Casa</li>
          <li>Esportes</li>
          <li>Beleza</li>
        </ul>
      </div>

      {/* Lado direito */}
      <div className="p-d-flex p-flex-column p-ai-start w-20">
        <h3>Contato</h3>
        <p>
          Email: contato@exemplo.com
          <br />
          Telefone: (11) 1234-5678
          <br />
          Endereço: Rua Exemplo, 123, São Paulo, SP
        </p>
      </div>
    </footer>
  );
};

export default Footer;
