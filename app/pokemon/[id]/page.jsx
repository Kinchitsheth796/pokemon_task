import CardSection from '../../components/CardSection';
import Link from 'next/link';

const PokemonDetails = async ({ params }) => {
  const { id } = params;
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = await response.json();
  console.log({ pokemon: pokemon.forms });

  return (
    <>
      <div className="flex items-center justify-center h-full">
        <div className="p-4 shadow-xl w-fit max-w-[400px]">
          <div className="bg-white -mx-4 -mt-4 rounded-t">
            <Link className="ml-2 hover:underline font-bold" href="/">
              Back
            </Link>
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              className="mx-auto w-52"
            />
          </div>
          <div className="text-center">
            <div className="mb-4 h-[0.5px] -mx-4"></div>
            <div className="p-4 bg-violet-500 -m-4 bg-opacity-50 rounded-br rounded-bl">
              <div className="flex gap-1 items-center">
                <p className="text-lg font-bold text-left">Name: </p>
                <h1 className="text-left capitalize">{pokemon.name}</h1>
              </div>
              <CardSection
                title="Type"
                items={pokemon.types.map((type) => ({
                  name: type.type.name,
                  url: type.type.url,
                }))}
                isLink
              />
              <CardSection
                title="Stats"
                items={pokemon.stats.map((stat) => ({
                  name: stat.stat.name,
                  url: stat.stat.url,
                }))}
                isLink
              />
              <CardSection
                title="Moves"
                items={pokemon.moves.slice(0, 4).map((move) => ({
                  name: move.move.name,
                  url: move.move.url,
                }))}
                isLink
              />
              <CardSection
                title="Abilities"
                items={pokemon.abilities.slice(0, 4).map((ability) => ({
                  name: ability.ability.name,
                  url: ability.ability.url,
                }))}
                isLink
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonDetails;
