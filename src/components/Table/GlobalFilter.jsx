import React from "react";
import PropTypes from "prop-types";

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <span className="table__header--search">
      Search :{" "}
      <input
        value={filter || ""}
        onChange={(event) => setFilter(event.target.value)}
        className="table__header--input"
      />
    </span>
  );
};

GlobalFilter.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func.isRequired,
};
