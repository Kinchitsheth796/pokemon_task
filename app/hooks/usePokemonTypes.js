import { useEffect, useState } from 'react';

const usePokemonTypes = () => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/type')
      .then((response) => response.json())
      .then((data) => {
        setTypes(data.results.map((type) => type.name));
      });
  }, []);

  return types;
};

export default usePokemonTypes;
