import React from 'react';
import "./Header.scss"


export default function Header() {
  return (
    <div className="header">
      <div className="header__wrapper">
        <div className="header__wrapper--left">
          <h1>WealthWise</h1>
        </div>
        <div className="header__wrapper--right">
          <ul>
          <li>Add Expense</li>
          <li> Details</li>
         </ul>
        </div>
      </div>
    </div>
  )
}
