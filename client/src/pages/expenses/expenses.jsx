import React from 'react'
import "./expenses.scss"
import axios from "axios";

export default function Expenses() {
  const today = new Date();
   const exactDate = today.toDateString();
  const addExpense = async(event)=>{
    event.preventDefault();
    const url = process.env.REACT_APP_BASE_URL + "/wealthwise/expenses";

    try{
        await axios.post(process.env.REACT_APP_BASE_URL + "/wealthwise/expenses", {
        amount: event.target.amount.value,
        expense: event.target.category.value,
        date:exactDate,
      });

      alert("expense was succesfully added");
     
    }
    catch(e)
    {
      console.log("there was errro in adding this expenses", e);
    }
  }
  return (
    <div className='expenses'>
        <h1 className='expenses__title'>Add Expense</h1>
        <form onSubmit={(e) => addExpense(e)}>
                <div className="expense-group">
                    <label>Amount</label>
                    <input type="amount" id="amount" name="amount" placeholder='$10' />
                </div>
                <div className="expense-group">
                <label htmlFor="category">Category</label>
                    <select id="category" name="category" >
                        <option value="">Select a category</option>
                        <option value="category1">Utilities</option>
                        <option value="category2">Food</option>
                        <option value="category3">Leisures</option>
                        <option value="category4">Shopping</option>
                        <option value="category5">Others</option>
                    </select>
                </div>
                <button type="submit">ADD</button>
            </form>
    </div>
  )
}
