

const Search = ({ search, setSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target.elements.search.value);
  };

  return (
    <div className="search-bar-container">
      <div className="search-engine">
        <form className="city-search" onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter city" name="search" />
          <button type="submit" className="btn">
            Search!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
