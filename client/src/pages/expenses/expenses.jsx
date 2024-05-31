import React, { useState } from 'react'
import "./expenses.scss"


export default function Expenses({expenses,setExpenses,budget}) {
  const [inputExpense,setInputExpense] = useState('');
  const handleExpense = () => {
    setExpenses(expenses + parseFloat(inputExpense))
    setInputExpense('')

  }
    
  return (
    <div className='expenses'>
        <h1 className='expenses__title'>Add Expense</h1>
        <form>
                <div className="expense-group">
                    <label>Amount</label>
                    <input type="number" id="amount" name="amount" placeholder='$10.00' value={inputExpense} onChange={(e) => setInputExpense(e.target.value)}/>
                </div>
                <div className="expense-group">
                <label for="category">Category</label>
                    <select id="category" name="category" >
                        <option value="">Select a category</option>
                        <option value="category1">Utilities</option>
                        <option value="category2">Food</option>
                        <option value="category3">Leisures</option>
                        <option value="category4">Shopping</option>
                        <option value="category5">Others</option>
                    </select>
                </div>
                <button type="submit" onClick={handleExpense}>ADD</button>
            </form>
    </div>
  )
}
