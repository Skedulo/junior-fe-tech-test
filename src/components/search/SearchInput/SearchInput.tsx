import React from "react";
import clearIcon from "../../../X.svg";
import "./SearchInput.css";

export interface SearchInputProps {
  className: string;
  placeholder: string;
  searchQuery: string;
  showClearIcon: boolean;
  clearSearchQuery: (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => void;
  onFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (event: React.FocusEvent<HTMLInputElement>) => void;
}

function SearchInput({
  placeholder,
  searchQuery,
  onFocus,
  onChange,
  showClearIcon,
  clearSearchQuery,
  className,
}: SearchInputProps) {
  return (
    <>
      <label>
        Search
        <input
          data-testid="search-input"
          className={className}
          id="search-input"
          placeholder={placeholder}
          onChange={onChange}
          onFocus={onFocus}
          value={searchQuery}
        />
      </label>
      {showClearIcon && (
        <div
          className="search-input--clear-icon"
          data-testid="clear-icon"
          onClick={clearSearchQuery}
        >
          <img alt="clear-icon" src={clearIcon} />
        </div>
      )}
    </>
  );
}

export default SearchInput;
