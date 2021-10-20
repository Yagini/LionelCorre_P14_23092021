import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom";

import "./EmployeeList.css";

/**
 * Const Table import the component table with lazy for optimize perf. Lazy call the component when is necessary
 */
const Table = lazy(() => import("../../components/Table/Table"));

/**
 * EmployeeList component for build a table
 * @returns render
 */
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
