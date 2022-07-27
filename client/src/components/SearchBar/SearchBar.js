import React from "react";
import {FiSearch} from "react-icons/fi";

function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="search..." />
      <button>
        <FiSearch />
      </button>
    </form>
  );
}

export default SearchBar;
