import React from "react";

import "./Homepage.css";

import Navigation from "../../components/Nav/Navigation";
import Form from "../../components/Form/Form";

/**
 * Homepage component is a index page
 * @returns render
 */
function Homepage() {
  return (
    <div className="homepage__container">
      <Navigation />
      <h2 className="homepage__title">Create Employee</h2>
      <Form />
    </div>
  );
}

export default Homepage;
