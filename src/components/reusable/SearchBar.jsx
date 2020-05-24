import React, { useContext } from "react";
import MoviesContext from "../../context/MoviesContext";

const SearchBar = () => {
  const { searchQuery, setSearchQuery, setSelectedGenre } = useContext(
    MoviesContext
  );
  const handleSearch = ({ target: { value } }) => {
    setSearchQuery(value);
    setSelectedGenre(null);
  };

  return (
    <input
      value={searchQuery}
      onChange={handleSearch}
      placeholder="Search..."
    />
  );
};

export default SearchBar;
