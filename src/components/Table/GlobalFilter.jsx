import React from "react";

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <span className="table__header--search">
      Search : {' '}
      <input
        value={filter || ""}
        onChange={(event) => setFilter(event.target.value)}
        className="table__header--input"
      />
    </span>
  );
};
