import React, { useEffect, useState } from 'react';
import './details.scss';

function Details() {
  const [expenses, setExpenses] = useState([]);
  const serverUrl = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await fetch(`${serverUrl}/weathwise/expenses`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setExpenses(data);
      } catch (error) {
        console.error('Error fetching expenses:', error);
      }
    };

    fetchExpenses();
  }, [serverUrl]); 

  return (
    <div className='details'>
      <h1 className='details__title'>Details</h1>
      <ul className='details__display'>
        {expenses.map((expense) => (
          <li key={expense.id}>
            <div className='details__expense'>Expense: {expense.expense}</div>
            <div className='details__amount'>Amount: {expense.amount}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Details;
