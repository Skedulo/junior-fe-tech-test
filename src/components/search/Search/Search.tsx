import React, { useState } from "react";
import SearchInput from "../SearchInput/SearchInput";
import "./Search.css";
import SearchResultList from "../SearchResultList";

interface SearchProps {
  clearSearchQuery: (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => void;
  searchQuery: string;
  onChange: (event: React.FocusEvent<HTMLInputElement>) => void;
  results: any[];
}

function Search({
  clearSearchQuery,
  searchQuery,
  onChange,
  results,
}: SearchProps) {
  const [active, setActive] = useState(false);
  const onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setActive(true);
  };

  return (
    <>
      <div className="container">
        <SearchInput
          className="search-container"
          placeholder="Search"
          onFocus={onFocus}
          onChange={onChange}
          showClearIcon={!!searchQuery}
          searchQuery={searchQuery}
          clearSearchQuery={clearSearchQuery}
        />
        {active && (
          <div className="search-container">
            <SearchResultList results={results} />
          </div>
        )}
      </div>
      {active && <div className="overlay" onClick={() => setActive(false)} />}
    </>
  );
}

export default Search;
