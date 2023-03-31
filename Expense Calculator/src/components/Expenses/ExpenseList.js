import React from 'react'
import "./ExpenseList.css"
import ExpenseItem from './ExpenseItem'
function ExpenseList(props) {

    if (props.filteredExpense.length === 0) {
        return <h2 className='expenses-list__fallback '>No Expense Found</h2>
    }


    return (
        <div>
            <ul className='expenses-list'>

                {props.filteredExpense.map((element) => { return <ExpenseItem key={element.id} title={element.title} amount={element.amount} date={element.date} /> })
                }            
            </ul>

        </div>
    )
}
export default ExpenseList
