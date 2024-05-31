import React from 'react'
import "./expenses.scss"

export default function Expenses() {
  return (
    <div className='expenses'>
        <h1 className='expenses__title'>Add Expense</h1>
        <form>
                <div className="expense-group">
                    <label>Amount</label>
                    <input type="amount" id="amount" name="amount" placeholder='$10' />
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
                <button type="submit">ADD</button>
            </form>
    </div>
  )
}
