import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.png";

import "./Navigation.css";

function Navigation() {
  return (
    <header className="navigation">
      <Link className="navigation__logo" to="/">
        <img src={Logo} alt="Logo Wealth Health" className="navigation__logo--img" />
        <p className="navigation__logo--title">HRnet</p>
      </Link>
      <Link className="navigation__item" to="/employee-list">
        View Current Employees
      </Link>
    </header>
  );
}

export default Navigation;
