import React from "react";
import "./SearchResultListItem.css";

interface SearchResultListItemProps {
  name: string;
  start: string;
  end: string;
}

const SearchResultListItem = ({
  name,
  start,
  end,
}: SearchResultListItemProps) => {
  return (
    <div className="item-container" data-testid="item-id">
      <div>{name}</div>
      <div>Contract's start: {start}</div>
      <div>Contract's end: {end}</div>
    </div>
  );
};

export default SearchResultListItem;
