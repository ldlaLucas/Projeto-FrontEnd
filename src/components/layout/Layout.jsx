import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Outlet } from 'react-router-dom'; // Importando o Outlet
import 'primeflex/primeflex.css'; // Importação do PrimeFlex
import './layout.css'; // CSS para o layout

const Layout = () => {
  return (
    <div className="layout">
      <Header className="layout-header p-d-flex p-jc-center p-ai-center" />
      <main className="layout-main p-p-4">
        <Outlet /> {/* Renderiza o conteúdo das rotas aqui */}
      </main>
      <Footer className="layout-footer p-d-flex p-jc-center p-ai-center" />
    </div>
  );
};

export default Layout;
