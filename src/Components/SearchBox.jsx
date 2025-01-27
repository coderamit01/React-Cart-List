
const SearchBox = ({searchInput,onSearch}) => {
  return (
    <div className="w-5/12 md:w-3/12">
      <input type="text" className="border p-1 rounded border-slate-300 outline-none w-full" placeholder="Search Cars.."
      value={searchInput}
      onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;