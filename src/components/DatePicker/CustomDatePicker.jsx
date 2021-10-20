import React from "react";
import PropTypes from "prop-types";

import DatePicker from "react-datepicker";
import { getMonth, getYear } from "date-fns";
import range from "lodash/range";
import { allMonths } from "../../localData/calendar";

import { FaCaretLeft, FaCaretRight, FaHome } from "react-icons/fa";

import "./CustomDatePicker.css";
import "react-datepicker/dist/react-datepicker.css";

/**
 * datePicker component based on react-datepicker
 * @param { id, startDate, setStartDate } props the datePicker props
 * @returns render
 */

function CustomDatePicker({ id, startDate, setStartDate }) {
  const years = range(1920, getYear(new Date()) + 1, 1);
  const months = allMonths;

  return (
    <div className="date-picker__container">
      <DatePicker
        id={id}
        className="date-picker__container"
        renderCustomHeader={({
          date,
          changeMonth,
          changeYear,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisable,
        }) => (
          <div className="date-picker__header">
            <FaCaretLeft onClick={decreaseMonth} disabled={prevMonthButtonDisabled} />
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
        todayButton={<FaHome />}
        useWeekdaysShort={true}
        showPopperArrow={false}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        required
      />
    </div>
  );
}

CustomDatePicker.propTypes = {
  setStartDate: PropTypes.func.isRequired,
};

export default CustomDatePicker;
