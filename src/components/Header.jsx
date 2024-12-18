import "../styles.css";
import "../variables.css";
import React from "react";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { Button } from "primereact/button";

// Importação de estilos do PrimeReact
import "primereact/resources/themes/lara-light-pink/theme.css"; // Tema Lara Light Pink
import "primereact/resources/primereact.min.css"; // Estilos globais do PrimeReact
import "primeicons/primeicons.css"; // Biblioteca de ícones PrimeIcons
import "primeflex/primeflex.css"; // Classes utilitárias PrimeFlex

// Importação da logo
import logo from "../assets/logo-header.svg";
import Navbar from "./NavBar/NavBar";

const Header = () => {
  // Lado esquerdo: Botão "Cadastre-se"
  const singUp = (
    <Button
      label="Cadastre-se"
      text
      class="button dark-gray-3"
      onClick={() => {}}
    />
  );

  const login = (
    <Button
      label="Entrar"
      raised
      className="p-button-sm p-button-sm"
      class="button-primary"
      onClick={() => {}}
    />
  );

  const carrinho = <InputIcon className="pi pi-cart-plus" onClick={() => {}} />;

  // Lado direito: Logo
  const start = <img src={logo} alt="Logo" class="logo" />;

  // Caixa de pesquisa no centro
  const pesquisa = (
    <>
      <IconField>
        <InputIcon className="pi pi-search pi-search cursor:pointer">
          {" "}
        </InputIcon>
        <InputText
          placeholder="  Pesquisar produtos..."
          class="pesquisarProdutos"
        />
      </IconField>
    </>
  );

  return (
    <header className="overflow-hidden px-5">
      {/* Linha superior: Botão à esquerda, pesquisa no meio, logo à direita */}
      <div className="flex flex-row justify-content-between align-items-center p-py-4px p-px-4px">
        {start} {/* Logo */}
        {pesquisa} {/* Caixa de pesquisa */}
        {singUp} {/* Botão "Cadastre-se" */}
        {login} {/* Botão "login" */}
        {carrinho} {/* Botão "carrinho" */}
      </div>

      {/* Linha inferior: Barra de navegação */}
      {/* <TabMenu model={navItems} />
       */}
      <Navbar />
    </header>
  );
};

export default Header;
