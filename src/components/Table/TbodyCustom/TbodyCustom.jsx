import React from "react";

function TbodyCustom([employeesArray]) {
  return employeesArray.map((objects, index) => <td key={index}>{objects}</td>);
}

export default TbodyCustom;
