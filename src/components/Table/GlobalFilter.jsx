import React from "react";

function GlobalFilter({ filter, setFilter }) {
  return (
    <span>
      Search :
      <input type="Search" value={filter} onChange={(event) => setFilter(event.target.value || undefined)} />
    </span>
  );
}

export default GlobalFilter;
