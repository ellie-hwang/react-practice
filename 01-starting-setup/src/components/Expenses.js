import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from './Card';

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
    <Card className='expenses'>
      {expenseList}
    </Card>
  )
}

export default Expenses;
