import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom";

import "./EmployeeList.css";

const Table = lazy(() => import("../../components/Table/Table"));

function EmployeeList() {
  return (
    <div className="employee__container">
      <h1>Current Employees</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Table />
      </Suspense>
      <Link to="/" className="custom__button">
        Home
      </Link>
    </div>
  );
}

export default EmployeeList;
