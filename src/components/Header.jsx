import React from "react";
import { TabMenu } from "primereact/TabMenu";
import { InputText } from "primereact/inputtext";
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Button } from "primereact/button";

// Importação de estilos do PrimeReact
import "primereact/resources/themes/lara-light-pink/theme.css"; // Tema Lara Light Pink
import "primereact/resources/primereact.min.css"; // Estilos globais do PrimeReact
import "primeicons/primeicons.css"; // Biblioteca de ícones PrimeIcons
import "primeflex/primeflex.css"; // Classes utilitárias PrimeFlex

// Importação da logo
import logo from "../assets/logo-header.svg";

const Header = () => {
  // Configuração dos itens da barra de navegação
  const navItems = [
    { label: "Home", command: () => (window.location.href = "/home") },
    { label: "Produtos", command: () => (window.location.href = "/produtos") },
    { label: "Categorias", command: () => (window.location.href = "/categorias") },
    { label: "Meus Pedidos", command: () => (window.location.href = "/meus-pedidos") },
  ];

  // Lado esquerdo: Botão "Cadastre-se"
  const singUp = (
    <Button
      label="Cadastre-se"
      text
      onClick={() => {}}
    />
  );

  const login = (
      <Button
      label="Entrar"
      raised
      className="p-button-sm p-button-sm"
      onClick={() => {}}
    />
  );

  const carrinho = (
      <i
      class="pi pi-cart-plus"
      onClick={() => {}}
    />
  );

  // Lado direito: Logo
  const start = (
    <img
      src={logo}
      alt="Logo"
      style={{
        width: "253px",
        height: "44px",
        margin: "8px",
      }}
    />
  );

  // Caixa de pesquisa no centro
  const pesquisa = (
    <>
      <IconField>
        <InputIcon className="pi pi-search 8px"> </InputIcon>
        <InputText       
          placeholder="Pesquisar produtos"
          style={{
            width: "559px",
            height: "60px",
            margin: "8px"
        }}/>
        
      </IconField>
    </>
  );

  return (
      <header>
      {/* Linha superior: Botão à esquerda, pesquisa no meio, logo à direita */}
      <div className="flex flex-row justify-content-around align-items-center p-py-4px p-px-4px">
        {start} {/* Logo */}
        {pesquisa} {/* Caixa de pesquisa */}
        {singUp} {/* Botão "Cadastre-se" */}
        {login} {/* Botão "login" */}
        {carrinho} {/* Botão "carrinho" */}
      </div>

      {/* Linha inferior: Barra de navegação */}
      <TabMenu model={navItems} />
    </header>
  );
};

export default Header;
