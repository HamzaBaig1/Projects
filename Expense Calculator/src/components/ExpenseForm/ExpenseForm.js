import React, { useState } from 'react'
import "./ExpenseForm.css"
function ExpenseForm(props) {

// THE COMMENTED PART IS AN ALTERNATE WAY TO USE MULTIPLE STATES AS ONE
    //BOTH CAN BE USED UPON PERSONAL PREFERENCE

    const [enteredTitle, setEnteredTitle] = useState("")
    const [enteredAmount, setEnteredAmount] = useState("")
    const [enteredDate, setEnteredDate]= useState("")

    // const [userInput,setUserInput] = useState({
    //     title:"",
    //     amount:"",
    //     date:""
    // });

    const titleChangeHandler = (event)=>
    {
        setEnteredTitle(event.target.value)

    //    setUserInput({
    //     ...userInput,
    //     title:event.target.value;
    //    })


    // WHENVER YOU ENNCOUTER STATE CHANGE THAT DEPENDS ON PREVIOUS STATE THE USE THIS
    
    // setUserInput((prevState)=>{
    //     return {
    //         ...prevState,
    //         title:event.target.value
    //     }
    // })
    }

    const amountChangeHandler = (event)=>
    {
        setEnteredAmount(event.target.value)

        // setUserInput({
        //     ...userInput,
        //     amount:event.target.value;
        //    })
    }

    const dateChangeHandler= (event)=>
    {
        setEnteredDate(event.target.value)
        
        // setUserInput({
        //     ...userInput,
        //     date:event.target.value;
        //    })
    }

    const submitHandler = (event)=>
    {
        event.preventDefault();  //it will prevent defaault form submission behaviour

        const expenseData =
        {
            title:enteredTitle,
            amount:enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);
        setEnteredTitle(" ");
        setEnteredAmount(" ");
        setEnteredDate(" ");
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className='new-expense__controls' >
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input value={enteredTitle} onChange={titleChangeHandler} type="text" />
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input value={enteredAmount} onChange={amountChangeHandler} type="number" min="0.01" step="0.01" />
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input value={enteredDate} onChange={dateChangeHandler} type="date" min="2019-01-01" max="2022-12-31" />
                    </div>
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'>Submit Expense</button>
                    <button type='submit' onClick={props.onCancel}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default ExpenseForm
