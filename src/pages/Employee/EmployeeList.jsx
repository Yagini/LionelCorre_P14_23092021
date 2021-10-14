import React from "react";
import { Link } from "react-router-dom";
import "./EmployeeList.css";

import Table from "../../components/Table/Table";

function EmployeeList() {
  return (
    <div className="employee__container">
      <h1>Current Employees</h1>
      <Table />
      <Link to="/" className="custom__button">
        Home
      </Link>
    </div>
  );
}

export default EmployeeList;
