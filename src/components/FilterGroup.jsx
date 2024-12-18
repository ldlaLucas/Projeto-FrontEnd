//--------------------------------------------
// 3. Atualizar o FilterGroup.jsx para importar o CSS
//--------------------------------------------
/* src/components/FilterGroup/FilterGroup.jsx */
import React from 'react';
// import './FilterGroup.css';

const FilterGroup = ({ title, inputType, options }) => {
  return (
    <div className="filter-group">
      <h4>{title}</h4>
      {options.map((option, index) => (
        <label key={index}>
          <input type={inputType} value={option.value || ''} />
          {option.text}
        </label>
      ))}
    </div>
  );
};

export default FilterGroup;