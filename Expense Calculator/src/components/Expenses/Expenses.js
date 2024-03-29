import React, { useState } from 'react'
import Card from '../UI/Card'
import "../Expenses/Expenses.css"
import ExpensesFilter from './ExpenseFilter'
import ExpenseList from './ExpenseList'
import ExpensesChart from './ExpensesChart'

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState("2020")

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filteredExpense = props.expense.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  
  return (
    <Card className='expenses'>

      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpense}/>
      <ExpenseList filteredExpense={filteredExpense}/>

    </Card>
  )
}

export default Expenses
