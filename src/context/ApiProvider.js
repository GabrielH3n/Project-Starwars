import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ApiContext from './ApiContext';

function ApiProvider({ children }) {
  const [Planets, setPlanets] = useState([]);
  console.log(Planets);

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((data) => data.json())
      .then((data) => setPlanets(data.results));
  }, []);

  const context = {
    data: Planets,
  };
  return (
    <ApiContext.Provider value={ context }>{ children }</ApiContext.Provider>
  );
}

ApiProvider.propTypes = {
  children: PropTypes.element,
}.isRequired;

export default ApiProvider;
