import React from 'react';
import './Section.css'; 

const Section = ({ title, titleAlign = "left", link, children }) => {
  return (
    <section className="section-container">
      <div className={`section-header ${titleAlign === "center" ? "center" : ""}`}>
        {/* Título da seção */}
        <h2 className="section-title">{title}</h2>

        {/* Link, se fornecido */}
        {link && (
          <a href={link.href} className="section-link">
            {link.text}
          </a>
        )}
      </div>

      {/* Conteúdo dinâmico da seção */}
      <div className="section-content">
        {children}
      </div>
    </section>
  );
};

export default Section;
