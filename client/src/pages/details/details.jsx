import React, { useEffect, useState } from 'react';
import './details.scss';

function Details() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await fetch('/');
        const data = await response.json();
        setExpenses(data);
      } catch (error) {
        console.error('Error fetching expenses:', error);
      }
    };

    fetchExpenses();
  }, []);

  return (
    <div className='details'>
      <h1 className='details__title'> Details</h1>
      <ul className='details__display'>
        {expenses.map((expense) => (
          <li key={expense.id}>
            <div>Expense: {expense.expense}</div>
            <div>Amount: {expense.amount}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Details;
