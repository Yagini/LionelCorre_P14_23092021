import React, { useMemo, useState } from "react";

import { useGlobalFilter, useTable } from "react-table";
import { tableColumns } from "./tableColumns";
import "./Table.css";
import GlobalFilter from "./GlobalFilter";

function Table() {
  const employeesData = JSON.parse(localStorage.getItem("employees"));  

  const columns = useMemo(() => tableColumns, []);
  const data = useMemo(() => employeesData, []);

  //shorthand syntax columns: columns
  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, state, setGlobalFilter } = tableInstance;

  const { globalFilter } = state;

  return (
    <>
      <header>
        <label htmlFor="entriesSelector">
          show
          <select id="entriesSelector">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          entries
        </label>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
      </header>
      <table className="table__contain" {...getTableProps()}>
        <thead className="table__head">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} className="table__head--tr">
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} className="table__head--th">
                  {column.render("Header")}{" "}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="table__body">
          {rows.map((row) => {
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
    </>
  );
}

export default Table;

//code from scratch

/*<div className="table__Container">
      <header>
        <label htmlFor="entriesSelector">
          show
          <select id="entriesSelector">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          entries
        </label>
        Search :
        <input type="Search" />
      </header>
      <table className="table__contain">
        <thead className="table__head">
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>StartDate</th>
            <th>Departements</th>
            <th>Date of birth</th>
            <th>Street</th>
            <th>City</th>
            <th>State</th>
            <th>Zip Code</th>
          </tr>
        </thead>
        <tbody className="table__body">
          <TbodyCustom employeesArray={employeesData}/>
          <tr>
            <td>FirstName</td>
            <td>LastName</td>
            <td>StartDate</td>
            <td>Departements</td>
            <td>Date of birth</td>
            <td>Street</td>
            <td>City</td>
            <td>State</td>
            <td>Zip Code</td>
          </tr>
        </tbody>
      </table>
      <div className="table__footer">
        <p>Showing 1 to 2 of entries</p>
      </div>
    </div>*/
