import React, { useState } from "react";
import PropTypes from "prop-types";

import "./Dropdown.css";

/**
 * The Dropdown component
 * @param {selectDatas, label, id, handleChange} props the props of the Dropdown component
 * @returns
 */
function Dropdown({ selectDatas, label, id, handleChange }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="form__container dropdown__container">
      <label htmlFor={id}>{label}</label>
      <select
        className="dropdown__list"
        id={id}
        onClick={() => setIsVisible(!isVisible)}
        onChange={handleChange}
        required
      >
        {selectDatas.map((data) => (
          <option value={data.value} key={data.abbreviation}>
            {data.name}
          </option>
        ))}
      </select>
    </div>
  );
}

Dropdown.propTypes = {
  selectDatas: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Dropdown;
