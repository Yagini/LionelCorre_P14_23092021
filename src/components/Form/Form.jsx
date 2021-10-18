import React, { useState } from "react";
import CustomDatePicker from "../DatePicker/CustomDatePicker";
import Dropdown from "../Dropdown/Dropdown";

import { Modal, useModal } from "modal-react-module";
import "modal-react-module/dist/components/Modal.css";

import "./Form.css";

import { states, departments } from "../../localData/dropdownData";

function Form() {
  const [showModal, setShowModal, showSpinner, setShowSpinner] = useModal();  
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
    setShowSpinner();
    setShowModal();    
    let employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.push(employeeForm);
    localStorage.setItem("employees", JSON.stringify(employees));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form__container">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={employeeForm.firstName}
          onChange={handleChange}
          required
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={employeeForm.lastName}
          onChange={handleChange}
          required
        />

        <label htmlFor="dateOfBirth">Date of Birth</label>
        <CustomDatePicker
          id="startDate"
          startDate={employeeForm.dateOfBirth}
          setStartDate={(date) => setEmployeeForm({ ...employeeForm, dateOfBirth: date })}
        />

        <label htmlFor="startDate">Start Date</label>
        <CustomDatePicker
          id="startDate"
          startDate={employeeForm.startDate}
          setStartDate={(date) => setEmployeeForm({ ...employeeForm, startDate: date })}
        />

        <fieldset className="form__address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input type="text" id="street" value={employeeForm.street} onChange={handleChange} required />

          <label htmlFor="city">City</label>
          <input type="text" id="city" value={employeeForm.city} onChange={handleChange} required />

          <Dropdown
            label="States"
            id="state"
            selectDatas={states}            
            handleChange={handleChange}
          />

          <label htmlFor="zipCode">Zip Code</label>
          <input type="number" id="zipCode" value={employeeForm.zipCode} onChange={handleChange} required />
        </fieldset>
        <Dropdown
          label="Departments"
          id="department"
          selectDatas={departments}          
          handleChange={handleChange}
        />

        <input type="submit" value="Save" className="form__button" />

        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          showSpinner={showSpinner}
          setShowSpinner={setShowSpinner}
        >
          <p>employee created</p>
        </Modal>
      </form>
    </div>
  );
}

export default Form;
