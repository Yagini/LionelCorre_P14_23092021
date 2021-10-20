import React from "react";
import PropTypes from "prop-types";

function PageSize({ pageSize, setPageSize }) {
  return (
    <label htmlFor="entriesSelector" className="table__header--selector">
      show
      <select value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))} id="entriesSelector">
        {[10, 25, 50, 100].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            {pageSize}
          </option>
        ))}
      </select>
      entries
    </label>
  );
}

PageSize.propTypes = {
  pageSize: PropTypes.number.isRequired,
  setPageSize: PropTypes.func.isRequired,
};

export default PageSize;
