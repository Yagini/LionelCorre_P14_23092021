import React from "react";

function PageIndex({ page, pageIndex, gotoPage, previousPage, nextPage, canPreviousPage, canNextPage }) {
  const handleChangePage = (event) => {
    const pageNumber = event.target.value ? Number(event.target.value) - 1 : 0;
    gotoPage(pageNumber);
  };

  return (
    <div className="table__footer">
      <span className="table__entries">
        Showing {page.length} of {page.length} entries
      </span>
      <div className="table__navigation">
        <span className="table__navigation--button" onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </span>
        <input
          className="table__navigation--input"
          type="number"
          defaultValue={pageIndex + 1}
          onChange={handleChangePage}
        ></input>
        <span className="table__navigation--button" onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </span>
      </div>
    </div>
  );
}

export default PageIndex;
