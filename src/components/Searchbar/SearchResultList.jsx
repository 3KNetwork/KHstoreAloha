import "./SearchResultList.css";
import { SearchResult } from "./SearchResult";
import React from "react";

function SearchResultsList({ results }) {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <SearchResult result={result.kategoriAdi} key={id} />;
      })}
    </div>
  );
}

export default SearchResultsList;
