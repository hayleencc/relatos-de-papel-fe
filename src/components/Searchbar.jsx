import React, { useState } from "react";

const searchBar = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="search"
        className="form-control"
        placeholder="Buscar libro..."
        value={searchInput}
        onChange={handleSearch}
      />
    </div>
  );
};

export default searchBar;
