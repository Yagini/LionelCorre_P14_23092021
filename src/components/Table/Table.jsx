import React from "react";

import "./Table.css";

import TbodyCustom from "./TbodyCustom/TbodyCustom";

function Table() {

  const employeesData = JSON.parse(localStorage.getItem("employees"))  

  return (
    <div className="table__Container">
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
    </div>
  );
}

export default Table;
