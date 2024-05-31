import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.scss";


export default function Header() {
  return (
    <div className="header">
      <div className="header__wrapper">
        <div className="header__wrapper--left">
          <h1>WealthWise</h1>
        </div>
        <div className="header__wrapper--right">
          <ul>
            <li><Link to="/expenses">Add Expense</Link></li>
            <li><Link to="/details">Details</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
