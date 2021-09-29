import React from "react";

function GlobalFilter({ filter, setFilter }) {
  return (
    <span className="table__header--search">
      Search :
      <input type="Search" value={filter || " "} onChange={(event) => setFilter(event.target.value || undefined)} className="table__header--input"/>
    </span>
  );
}

export default GlobalFilter;
