import React, { useContext } from 'react';
import ApiContext from '../context/ApiContext';

// consultado o rep de BRENO
// https://github.com/tryber/sd-016-b-project-starwars-planets-search/pull/85/commits/cb33dd4728dda4a028d7334ca86cdb75e77f1fc4

function Header() {
  const {
    NameFilter,
    SetNameFilter,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    Filters,
    setFilters,
  } = useContext(ApiContext);

  const FilterClick = () => setFilters(Filters.concat({ column, comparison, value }));

  const columns = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];

  return (
    <div>
      <h1> Projeto Star Wars - Gabriel</h1>
      <input
        type="text"
        placeholder="Filtrar por nome"
        value={ NameFilter }
        onChange={ (event) => SetNameFilter(event.target.value) }
        data-testid="name-filter"
      />

      <select
        data-testid="column-filter"
        value={ column }
        onChange={ (event) => setColumn(event.target.value) }
      >
        {
          columns.map((_column) => (
            !Filters.find((filter) => filter.column === _column) && (
              <option>{ _column }</option>
            )
          ))
        }
      </select>

      <select
        data-testid="comparison-filter"
        value={ comparison }
        onChange={ (event) => setComparison(event.target.value) }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>

      <input
        type="number"
        data-testid="value-filter"
        value={ value }
        onChange={ (event) => setValue(event.target.value) }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ FilterClick }
      >
        Filtrar
      </button>

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
