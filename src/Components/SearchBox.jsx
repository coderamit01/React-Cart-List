import PropTypes from "prop-types";

const SearchBox = ({searchInput,onSearch}) => {
  return (
    <div className="w-5/12 md:w-3/12">
      <input type="text" className="border p-1 rounded border-slate-300 outline-none w-full lowercase" placeholder="Search Cars.."
      value={searchInput}
      onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

SearchBox.propTypes = {
  searchInput: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
}

export default SearchBox;