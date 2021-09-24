import React from "react";

import { months } from "../../../localData/calendar";

function DatePickerMonth() {
  const handleChangeMonth = () => {

  }
  return (
    <select className="date-picker__month-select" onChange={handleChangeMonth}>
      {months.map((month, index) => {
        return (
          <option value={month} key={index}>
            {month}
          </option>
        );
      })}
    </select>
  );
}

export default DatePickerMonth;
