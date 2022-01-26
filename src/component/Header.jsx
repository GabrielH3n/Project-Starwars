import React from 'react';

function Header() {
  return (
    <div>
      <h1> Projeto Star Wars - Gabriel</h1>
      <input type="text" placeholder="Filtrar por nome" />
      <select>
        <option value="PopulationOption">Population</option>
      </select>
      <select>
        <option value="Menor que">Menor que</option>
      </select>
      <input placeholder="0" />
      <button type="button">Filtrar</button>
      <label htmlFor="Orderna">
        <select id="Orderna">
          <option value="Population">Population</option>
        </select>
      </label>
      <label htmlFor="Ascendente">
        Ascendente
        <input type="radio" id="Ascendente" />
      </label>
      <label htmlFor="Descendente">
        Descendente
        <input type="radio" id="Descendente" />
      </label>
      <button type="button">Ordenar</button>
    </div>
  );
}

export default Header;
