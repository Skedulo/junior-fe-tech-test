import React from "react";
import "./SearchResultList.css";
import SearchResultListItem from "../SearchResultListItem/SearchResultListItem";

export type SearchResultProps = {
  results: any[];
};

const SearchResultList: React.VFC<SearchResultProps> = ({ results = [] }) => (
  <>
    {results.length > 0 ? (
      <div className="search-result-wrapper">
        <div className="no-result-wrapper">
          {results.map((item) => (
            <div key={item.id}>
              <SearchResultListItem {...item} />
            </div>
          ))}
        </div>
      </div>
    ) : (
      <div className="no-result-wrapper">
        <div>No results found.</div>
      </div>
    )}
  </>
);

export default SearchResultList;
