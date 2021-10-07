import React, { useState } from "react";
import CustomDatePicker from "../DatePicker/CustomDatePicker";
import Dropdown from "../Dropdown/Dropdown";
import Modal from "../Modal/Modal";
import useModal from "../Modal/useModal";

//import Modal from "modal-react-plugin/src/Index"
//import useModal from "modal-react-plugin/src/components/hooks/useModal";

import "./Form.css";

import { states, departments } from "../../localData/dropdownData";

function Form() {
  const { showModal, setShowModal } = useModal();
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
    setShowModal();
    let employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.push(employeeForm);
    localStorage.setItem("employees", JSON.stringify(employees));
  };

  return (
    <form onSubmit={handleSubmit} className="form__container">
      <label htmlFor="first-name">First Name</label>
      <input type="text" name="firstName" id="firstName" value={employeeForm.firstName} onChange={handleChange} />
      <label htmlFor="last-name">Last Name</label>
      <input type="text" name="lastName" id="lastName" value={employeeForm.lastName} onChange={handleChange} />

      <label htmlFor="dateOfBirth">
        Date of Birth
        <CustomDatePicker
          id="dateOfBirth"
          startDate={employeeForm.dateOfBirth}
          setStartDate={(date) => setEmployeeForm({ ...employeeForm, dateOfBirth: date })}
        />
      </label>

      <label htmlFor="startDate">
        Start Date
        <CustomDatePicker
          id="startDate"
          startDate={employeeForm.startDate}
          setStartDate={(date) => setEmployeeForm({ ...employeeForm, startDate: date })}
        />
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

      <Modal showModal={showModal} setShowModal={setShowModal}>
        <p>employee</p>   
      </Modal>
    </form>
  );
}

export default Form;
