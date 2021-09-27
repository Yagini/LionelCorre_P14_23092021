import React, { useState } from "react";
import CustomDatePicker from "../DatePicker/CustomDatePicker";
import Dropdown from "../Dropdown/Dropdown";
import Modal from "../Modal/Modal";
import "./Form.css";

function Form() {  
  const [modalVisibility, setModalVisibility] = useState(false);
  const [employee, setEmployee] = useState({
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
    setEmployee((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setModalVisibility(!modalVisibility);
    let employees = [];
    employees.push(employee); 
    localStorage.setItem("employees", JSON.stringify(employees))
    console.log(employees, localStorage);   
  };  

  const showModal = () => {
    setModalVisibility(!modalVisibility);
  };
  return (
    <form onSubmit={handleSubmit} className="form__container">
      <label htmlFor="first-name">First Name</label>
      <input type="text" name="firstName" id="firstName" value={employee.firstName} onChange={handleChange} />
      <label htmlFor="last-name">Last Name</label>
      <input type="text" name="lastName" id="lastName" value={employee.lastName} onChange={handleChange} />

      <label htmlFor="dateOfBirth">
        Date of Birth
        <CustomDatePicker id="dateOfBirth" />
      </label>

      <label htmlFor="startDate">
        Start Date
        <CustomDatePicker id="startDate" />
      </label>

      <fieldset className="form__address">
        <legend>Address</legend>

        <label htmlFor="street">Street</label>
        <input type="text" id="street" value={employee.street} onChange={handleChange} />

        <label htmlFor="city">City</label>
        <input type="text" id="city" value={employee.city} onChange={handleChange} />

        <Dropdown handleChange={handleChange} />

        <label htmlFor="zip-code">Zip Code</label>
        <input type="number" id="zipCode" value={employee.zipCode} onChange={handleChange} />
      </fieldset>
      <label htmlFor="department">Department</label>
      <select name="department" id="department" value={employee.departement} onChange={handleChange}>
        <option>Sales</option>
        <option>Marketing</option>
        <option>Engineering</option>
        <option>Human Resources</option>
        <option>Legal</option>
      </select>
      <input type="submit" value="Save" />
      {modalVisibility ? <Modal handleClose={showModal} /> : null}
    </form>
  );
}

export default Form;
