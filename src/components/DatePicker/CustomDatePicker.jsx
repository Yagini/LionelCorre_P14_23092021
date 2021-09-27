import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { getMonth, getYear } from "date-fns";
import range from "lodash/range";

import { FaCaretLeft, FaCaretRight, FaHome } from "react-icons/fa";

import "./CustomDatePicker.css";
import "react-datepicker/dist/react-datepicker.css";
import { allMonths } from "../../localData/calendar";

function CustomDatePicker() {
  const [startDate, setStartDate] = useState(null);
  const years = range(1950, getYear(new Date()) + 1, 1);
  const months = allMonths;

  return (
    <div className="date-picker__container">
      <DatePicker
        className="date-picker__container"
        renderCustomHeader={({
          date,
          openToDate,
          changeMonth,
          changeYear,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisable,
        }) => (
          <div className="date-picker__header">
            <FaCaretLeft onClick={decreaseMonth} disabled={prevMonthButtonDisabled} />
            <FaHome onClick={openToDate} />
            <select
              className="date-picker__select"
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}
            >
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
            <select
              className="date-picker__select"
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(value)}
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <FaCaretRight onClick={increaseMonth} disabled={nextMonthButtonDisable} />
          </div>
        )}
        useWeekdaysShort={true}
        showPopperArrow={false}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
}

export default CustomDatePicker;

/*import { FaCaretLeft, FaCaretRight, FaHome } from "react-icons/fa";
import "./DatePicker.css";
import DatePickerMonth from "./DatePickerMonth/DatePickerMonth";
import DatePickerYear from "./DatePickerYear/DatePickerYear";

function DatePicker({ name }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="date-picker__container">
      <label htmlFor="datePicker">{name}</label>
      <input
        type="text"
        name="datePicker"
        onClick={() => setIsVisible(!isVisible)}
      />
      {isVisible && (
        <div className="date-picker__header">
          <FaCaretLeft />
          <FaHome />
          <DatePickerMonth />
          <DatePickerYear />
          <FaCaretRight />
        </div>
      )}
    </div>
  );
}

export default DatePicker;*/