import React, { useState } from 'react'
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';

const dummy_data =  [
  { 
    id:"e1", 
    title:"Car",
    amount:"246",
    date: new Date('2021,02,23')
  },
  { 
    id:"e2",
    title:"Insurance",
    amount:"2456",
    date: new Date('2021,05,11')
  },
  { 
    id:"e3",
    title:"Bike",
    amount:"2321",
    date: new Date('2021,08,29')
  },
  { 
    id:"e4",
    title:"Rent",
    amount:"9822",
    date: new Date('2021,04,01')
  },
];

function App() {

  const [expense,setExpenses]= useState(dummy_data)

  const AddExpenseHandler =(expense)=>
  {
    setExpenses((prevExpenses) =>{
      return [   expense,   ...prevExpenses ];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={AddExpenseHandler}/>
      <Expenses expense={expense}/>
    </div>
  )
}

export default App
