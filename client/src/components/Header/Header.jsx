import React from 'react';
import "./Header.scss"
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="header__wrapper">
        <div className="header__wrapper--left">
        <NavLink to="/"> <h1>WealthWise</h1></NavLink>
         
        </div>
        <div className="header__wrapper--right">
          <ul>
          <NavLink to="/expenses"><li>Add Expense</li></NavLink>
          <NavLink to="/details"> <li> Details</li></NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}
