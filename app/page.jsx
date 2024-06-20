'use client';

import { useState } from 'react';
import usePokemonTypes from './hooks/usePokemonTypes';
import usePokemons from './hooks/usePokemons';
import Search from './components/Search';
import Card from './components/Card';

const HomePage = () => {
  const [type, setType] = useState('');
  const [search, setSearch] = useState('');
  const types = usePokemonTypes();
  const pokemons = usePokemons(type, search);

  return (
    <div className="px-20 py-10 mx-auto">
      <Search
        types={types}
        type={type}
        search={search}
        setType={setType}
        setSearch={setSearch}
      />
      <div className="grid grid-cols-3 gap-4">
        {pokemons.map((pokemon) => (
          <Card
            key={pokemon.name}
            name={pokemon.name}
            url={pokemon.url}
            image={pokemon.image}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
