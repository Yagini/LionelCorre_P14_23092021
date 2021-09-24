import React, { useState } from "react";
import { states } from "../../localData/states";

function Dropdown() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="form__container dropdown__container">
      <label htmlFor="state">State</label>
      <select
        className="dropdown__list"
        id="state"
        name="state"
        onClick={() => setIsVisible(!isVisible)}
      >
        {states.map((state) => (
          <option value={state.name} key={state.abbreviation}>
            {state.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
