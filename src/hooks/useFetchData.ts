import React, { useEffect, useRef, useState } from "react";
import { DataService } from "../service/DataService";

function UseFetchData() {
  const [searchQuery, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);

  const searchingName = async (name = "") => {
    const filteredResults = await DataService.getJobsWithSearchTerm(name);
    await setResults(filteredResults);
  };

  const onChange = ({ target }: any) => {
    setQuery(target.value);
    if (target.value.length > 2) {
      return searchingName(target.value);
    }
    return setResults([]);
  };

  const clearSearchQuery = () => {
    setQuery("");
    setResults([]);
  };

  return {
    searchQuery,
    results,
    onChange,
    clearSearchQuery,
  };
}

export default UseFetchData;
