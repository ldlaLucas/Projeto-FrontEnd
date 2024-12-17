import Header from "../../components/Header"; 
import Footer from "../../components/Footer"; 
import React from 'react';
import 'primeflex/primeflex.css'; // Importação do PrimeFlex
import './layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header className="layout-header p-d-flex p-jc-center p-ai-center" />
      <main className="layout-main p-p-4">
        {children}
      </main>
      <Footer className="layout-footer p-d-flex p-jc-center p-ai-center" />
    </div>
  );
};

export default Layout;