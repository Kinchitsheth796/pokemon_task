import { useEffect, useState } from 'react';

const usePokemons = (type, search) => {
  const SEARCH_LIMIT = 50;
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${SEARCH_LIMIT}`;
    if (type) {
      url = `https://pokeapi.co/api/v2/type/${type}`;
    }

    fetch(url)
      .then((response) => response.json())
      .then(async (data) => {
        let pokemonList = type
          ? data.pokemon.map((p) => p.pokemon)
          : data.results;

        pokemonList = await Promise.all(
          pokemonList.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            const details = await response.json();
            return {
              name: pokemon.name,
              url: pokemon.url,
              image: details.sprites.front_default,
            };
          })
        );

        if (search) {
          pokemonList = pokemonList.filter((pokemon) =>
            pokemon.name.includes(search.toLowerCase())
          );
        }
        setPokemons(pokemonList);
      });
  }, [type, search]);

  return pokemons;
};

export default usePokemons;
