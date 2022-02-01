import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ApiContext from './ApiContext';

function ApiProvider({ children }) {
  const [Planets, setPlanets] = useState([]);
  const [NameFilter, SetNameFilter] = useState('');
  const [column, setColumn] = useState('population');
  const [Filters, setFilters] = useState([]);
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((data) => data.json())
      .then((data) => setPlanets(data.results));
  }, []);

  const context = {
    data: Planets,
    NameFilter,
    SetNameFilter,
    value,
    setValue,
    comparison,
    setComparison,
    Filters,
    setFilters,
    column,
    setColumn,
  };
  return (
    <ApiContext.Provider value={ context }>{ children }</ApiContext.Provider>
  );
}

ApiProvider.propTypes = {
  children: PropTypes.element,
}.isRequired;

export default ApiProvider;
