import React, { useState } from "react";
import DatePicker from "../DatePicker/DatePicker";
import Dropdown from "../Dropdown/Dropdown";
import "./Form.css";

function Form() {
  const { firstName, setFirstName } = useState("");
  const { lastName, setLastName } = useState("");

  const handleSubmit = () => {
    return;
  };

  return (
    <form onSubmit={handleSubmit} className="form__container">
      <label htmlFor="first-name">First Name</label>
      <input
        type="text"
        name="first-name"
        id="first-name"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <label htmlFor="last-name">Last Name</label>
      <input
        type="text"
        name="last-name"
        id="last-name"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />
      <DatePicker name={"Date of Birth"} />
      <DatePicker name={"Start Date"} />
      <fieldset className="form__address">
        <legend>Address</legend>

        <label htmlFor="street">Street</label>
        <input type="text" id="street" />

        <label htmlFor="city">City</label>
        <input type="text" id="city" />

        
        <Dropdown />

        <label htmlFor="zip-code">Zip Code</label>
        <input type="number" id="zip-code" />
      </fieldset>
      <label htmlFor="department">Department</label>
      <select name="department" id="department">
        <option>Sales</option>
        <option>Marketing</option>
        <option>Engineering</option>
        <option>Human Resources</option>
        <option>Legal</option>
      </select>
      <input type="submit" value="Save" />
    </form>
  );
}

export default Form;
