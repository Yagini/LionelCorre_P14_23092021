import React, { useState } from "react";

function Dropdown({ selectDatas, label, id, key, handleChange }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="form__container dropdown__container">
      <label htmlFor={label}>{label}</label>
      <select className="dropdown__list" id={id} onClick={() => setIsVisible(!isVisible)} onChange={handleChange}>
        {selectDatas.map((data) => (
          <option value={data.name} key={data.abbreviation}>
            {data.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
