import React, { useContext } from 'react';
import ApiContext from '../context/ApiContext';

// TableItens e TableData feito consultando o rep
// https://github.com/tryber/sd-016-b-project-starwars-planets-search/pull/46

function TableItens() {
  const { data, NameFilter, Filters } = useContext(ApiContext);
  const planetsData = (planet) => {
    const properties = Object.keys(data[0]).filter((key) => key !== 'residents');
    return properties.map((property) => (
      <td key={ planet[property] }>
        {planet[property]}
      </td>
    ));
  };

  const ShowPlanet = (planet) => {
    const { name } = planet;
    if (!name.toLowerCase().includes(NameFilter.toLowerCase())) {
      return false;
    }

    const result = Object.keys(Filters).every(
      (index) => {
        const { column, comparison, value } = Filters[index];

        if (comparison === 'maior que') {
          return Number(planet[column]) > Number(value);
        }

        if (comparison === 'menor que') {
          return Number(planet[column]) < Number(value);
        }

        return Number(planet[column]) === Number(value);
      },
    );

    return result;
  };

  const TableData = () => data.map((planet) => (
    ShowPlanet(planet) && (
      <tr key={ planet.name }>
        {planetsData(planet)}
      </tr>
    )
  ));

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {TableData()}
        </tbody>
      </table>
    </div>
  );
}

export default TableItens;
