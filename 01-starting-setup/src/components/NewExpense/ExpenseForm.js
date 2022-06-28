import React from 'react';
import './ExpenseForm.css';

function ExpenseForm() {
  const titleChangeHandler = () => {
    console.log('Title changed');
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text"/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="text" onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-06-25"/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm;
