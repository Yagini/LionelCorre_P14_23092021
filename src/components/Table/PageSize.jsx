import React from "react";

function PageSize({pageSize, setPageSize}) {
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

export default PageSize