import React, { useState } from "react";
import { FaCaretLeft, FaCaretRight, FaHome } from "react-icons/fa";
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

export default DatePicker;
