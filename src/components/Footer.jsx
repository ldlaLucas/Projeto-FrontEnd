import React from "react";
import "primereact/resources/themes/mira/theme.css"; // Tema Lara Dark Gray
import "primereact/resources/primereact.min.css"; // Estilos globais do PrimeReact
import "primeicons/primeicons.css"; // Biblioteca de ícones PrimeIcons
import "primeflex/primeflex.css"; // Classes utilitárias PrimeFlex

// Importação da logo
import logo from "../assets/logo-footer.svg";

const Footer = () => {
  return (
    <footer
      className="flex flex-row justify-content-evenly align-content-center flex-wrap p-px-4px"
      style={{ backgroundColor: "#2c2c2c", color: "#fff",  height:"454px" }}
    >
      {/* Lado esquerdo */}
      <div className="p-d-flex p-flex-column p-ai-start" style={{ width: "20%" }}>
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          style={{
            width: "253px",
            height: "44px",
            marginBottom: "8px",
          }}
        />
        {/* Lorem Ipsum */}
        <p style={{ marginBottom: "10px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
        </p>
        {/* Ícones de Redes Sociais */}
        <div className="p-d-flex">
          <i
            className="pi pi-facebook p-mr-3"
            style={{ fontSize: "1.5rem", cursor: "pointer" }}
          ></i>
          <i
            className="pi pi-instagram p-mr-3"
            style={{ fontSize: "1.5rem", cursor: "pointer" }}
          ></i>
          <i
            className="pi pi-twitter"
            style={{ fontSize: "1.5rem", cursor: "pointer" }}
          ></i>
        </div>
      </div>

      {/* Centro esquerda */}
      <div className="p-d-flex p-flex-column p-ai-start" style={{ width: "20%" }}>
        <h3 style={{ marginBottom: "10px" }}>Informações</h3>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li style={{ marginBottom: "5px" }}>Sobre Drip Store</li>
          <li style={{ marginBottom: "5px" }}>Segurança</li>
          <li style={{ marginBottom: "5px" }}>Wishlist</li>
          <li style={{ marginBottom: "5px" }}>Blog</li>
          <li style={{ marginBottom: "5px" }}>Trabalhe conosco</li>
          <li style={{ marginBottom: "5px" }}>Meus Pedidos</li>
        </ul>
      </div>

      {/* Centro direita */}
      <div className="p-d-flex p-flex-column p-ai-start" style={{ width: "20%" }}>
        <h3 style={{ marginBottom: "10px" }}>Categorias</h3>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li style={{ marginBottom: "5px" }}>Tecnologia</li>
          <li style={{ marginBottom: "5px" }}>Moda</li>
          <li style={{ marginBottom: "5px" }}>Esportes</li>
          <li style={{ marginBottom: "5px" }}>Casa</li>
          <li style={{ marginBottom: "5px" }}>Beleza</li>
        </ul>
      </div>

      {/* Lado direito */}
      <div className="p-d-flex p-flex-column p-ai-start" style={{ width: "20%" }}>
        <h3 style={{ marginBottom: "10px" }}>Contato</h3>
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
