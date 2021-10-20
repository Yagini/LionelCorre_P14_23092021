import React, { useMemo } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

import { useGlobalFilter, useTable, useSortBy, usePagination } from "react-table";

import { tableColumns } from "./tableColumns";
import { GlobalFilter } from "./GlobalFilter";
import PageIndex from "./PageIndex";
import PageSize from "./PageSize";

import "./Table.css";

function Table() {
  const employeesData = JSON.parse(localStorage.getItem("employees")) || [];

  //hook useMemo for optimize the react speed. useMemo store a value in the memory and
  //not re-excute if the value not change
  const columns = useMemo(() => tableColumns, []);
  const data = useMemo(() => employeesData, []);

  //Hooks
  //shorthand syntax columns: columns & data: data
  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  /**
   * Props using in the Table Component
   */
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    gotoPage,
    prepareRow,
    state,
    setGlobalFilter,
    setPageSize,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <div className="table__container">
      <header className="table__header">
        <PageSize pageSize={pageSize} setPageSize={setPageSize} />
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      </header>

      <table className="table__contain" {...getTableProps()}>
        <thead className="table__head">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} className="table__head--tr">
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())} className="table__head--th">
                  {column.render("Header")}
                  {column.isSorted ? column.isSortedDesc ? <RiArrowDropDownLine /> : <RiArrowDropUpLine /> : " "}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="table__body">
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="table__body--tr">
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()} className="table__body--td">
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <PageIndex
        data={data}
        gotoPage={gotoPage}
        canNextPage={canNextPage}
        canPreviousPage={canPreviousPage}
        page={page}
        nextPage={nextPage}
        pageIndex={pageIndex}
        previousPage={previousPage}
      />
    </div>
  );
}

export default Table;
