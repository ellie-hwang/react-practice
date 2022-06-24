import './Expenses.css';
import ExpenseItem from './ExpenseItem';

function Expenses(props) {
  const expenseList = props.expenses.map(expense => {
    return (
      <ExpenseItem
        key = {expense.id}
        title = {expense.title}
        amount = {expense.amount}
        date = {expense.date}
      />
    )
  })

  return (
    <div className='expenses'>
      {expenseList}
    </div>
  )
}

export default Expenses;
