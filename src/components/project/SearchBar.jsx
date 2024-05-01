import React from "react";

export default function SearchBar() {
  return (
    <div className="search-bar">
      <div className="search-bar-box"></div>
      <input
        type="text"
        placeholder="Search Project"
        className="search-input"
      />
    </div>
  );
}
