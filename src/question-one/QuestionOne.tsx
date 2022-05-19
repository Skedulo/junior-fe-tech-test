import React from "react";
import { IDataService } from "../common/types";

import { SectionGroup } from "../components/section/SectionGroup";
import { SectionPanel } from "../components/section/SectionPanel";

import "./QuestionOne.css";
import Search from "../components/search/Search";
import useFetchData from "../hooks";

export const QuestionOne: React.FC<{ service: IDataService }> = () => {
  const { results, searchQuery, onChange, clearSearchQuery } = useFetchData();

  return (
    <SectionGroup>
      <SectionPanel>
        <Search
          searchQuery={searchQuery}
          clearSearchQuery={clearSearchQuery}
          results={results}
          onChange={onChange}
        />
      </SectionPanel>
    </SectionGroup>
  );
};
