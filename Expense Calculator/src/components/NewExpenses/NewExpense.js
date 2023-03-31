import React, { useState } from 'react'
import ExpenseForm from '../ExpenseForm/ExpenseForm'
import "./NewExpense.css"

function NewExpense(props) {

  const [isEditing ,setIsEditing] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData)=>
    {
        const expenseData= {
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    const startEdittingHandler = ()=>
    {
      setIsEditing(true)
    }
    const stopEdittingHandler = ()=>
    {
      setIsEditing(false)
    }
   

  return (
    <div className='new-expense'>
      {!isEditing && (<button style={{margin:"auto"}} onClick={startEdittingHandler}>Add New Expense</button>)}

      {isEditing && (<ExpenseForm onCancel={stopEdittingHandler} onSaveExpenseData={saveExpenseDataHandler}/>)}
      
    </div>
  )
}

export default NewExpense
