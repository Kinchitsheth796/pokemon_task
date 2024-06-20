const Search = ({ types, type, search, setType, setSearch }) => {
  return (
    <form className="flex items-center mb-4">
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="p-2 mb-0 mr-2 text-black border rounded h-11"
      >
        <option value="">All Types</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Pokémon"
        className="p-2 border rounded h-11"
      />
    </form>
  );
};

export default Search;
