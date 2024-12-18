import React, { useState } from "react";
import "../styles.css";

const ProductOptions = ({ options, radius, shape, type }) => {
  // Estado para controlar qual opção foi selecionada
  const [selectedOption, setSelectedOption] = useState(null);

  // Função que retorna o estilo baseado nas propriedades recebidas
  const getStyle = (option) => {
    const baseStyle = {
      width: shape === "circle" ? "31px" : "46px", // Largura do item
      height: shape === "circle" ? "31px" : "46px", // Altura do item
      borderRadius: shape === "circle" ? "50%" : radius || "0px", // Arredondamento baseado no formato
      border: "1px solid var(--light-gray-2)", // Cor padrão da borda
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer", // Indica interatividade
      fontSize: type === "text" ? "24px" : "0px", // Define o tamanho do texto se for tipo "texto"
      color: type === "text" ? "var(--dark-gray-2)" : "transparent", // Cor do texto para tipo "texto"
      backgroundColor: type === "color" ? option : "transparent", // Cor de fundo para tipo "cor"
      transition: "all 0.3s ease", // Suavidade na transição de estilos
    };

    // Adiciona a borda especial se o item estiver selecionado
    if (selectedOption === option) {
      baseStyle.border = "2px solid var(--primary)";
    }

    return baseStyle;
  };

  return (
    <div className="product-options-container">
      {/* Mapeia as opções recebidas e renderiza os itens */}
      {options.map((option, index) => (
        <div
          key={index}
          className="product-option"
          style={getStyle(option)}
          onClick={() => setSelectedOption(option)} // Define o item como selecionado ao clicar
        >
          {/* Exibe o texto da opção, se for tipo "texto" */}
          {type === "text" && option}
        </div>
      ))}
    </div>
  );
};

export default ProductOptions;
