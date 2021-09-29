import React, { useState } from "react";
import CustomDatePicker from "../DatePicker/CustomDatePicker";
import Dropdown from "../Dropdown/Dropdown";
import Modal from "../Modal/Modal";
import "./Form.css";

import { states, departments } from "../../localData/dropdownData";

function Form() {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [startDate, setStartDate] = useState("")
  const [employeeForm, setEmployeeForm] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  });

  const handleChange = (event) => {
    event.preventDefault();
    setEmployeeForm((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setModalVisibility(!modalVisibility);
    let employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.push(employeeForm);
    localStorage.setItem("employees", JSON.stringify(employees));    
  };

  const showModal = () => {
    setModalVisibility(!modalVisibility);
  };
  
  return (
    <form onSubmit={handleSubmit} className="form__container">
      <label htmlFor="first-name">First Name</label>
      <input type="text" name="firstName" id="firstName" value={employeeForm.firstName} onChange={handleChange} />
      <label htmlFor="last-name">Last Name</label>
      <input type="text" name="lastName" id="lastName" value={employeeForm.lastName} onChange={handleChange} />

      <label htmlFor="dateOfBirth">
        Date of Birth
        <CustomDatePicker id="dateOfBirth" startDate={startDate} setStartDate={setStartDate}/>
      </label>

      <label htmlFor="startDate">
        Start Date
        <CustomDatePicker id="startDate" startDate={startDate} setStartDate={setStartDate}/>
      </label>

      <fieldset className="form__address">
        <legend>Address</legend>

        <label htmlFor="street">Street</label>
        <input type="text" id="street" value={employeeForm.street} onChange={handleChange} />

        <label htmlFor="city">City</label>
        <input type="text" id="city" value={employeeForm.city} onChange={handleChange} />

        <Dropdown label="States" id="state" selectDatas={states} handleChange={handleChange} />

        <label htmlFor="zip-code">Zip Code</label>
        <input type="number" id="zipCode" value={employeeForm.zipCode} onChange={handleChange} />
      </fieldset>
      <Dropdown label="Departements" id="departement" selectDatas={departments} handleChange={handleChange} />

      <input type="submit" value="Save" className="form__button" />
      {modalVisibility ? <Modal handleClose={showModal} /> : null}
    </form>
  );
}

export default Form;
