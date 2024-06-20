import Link from 'next/link';
const PokemonCard = ({ name, url, image }) => {
  const id = url.split('/').filter(Boolean).pop();

  return (
    <Link href={`/pokemon/${id}`}>
      <div className="p-4 border rounded shadow hover:bg-gray-100 group">
        <img src={image} alt={name} className="object-contain w-32 h-32 mb-2" />
        <div className="flex md:justify-between sm:flex-col group-hover:text-black">
          <h2 className="text-lg font-bold capitalize">{name}</h2>
          <p>{`Details ->`}</p>
        </div>
      </div>
    </Link>
  );
};

export default PokemonCard;
