import React, { Fragment, useState } from 'react'
import './App.css'


const App = () => {

  const [cal, setCal] = useState('')
  const display = 0;

  const clear = () => {
    setCal('')
  }
  const numberHandler = (event) => {
    setCal(cal + event.target.value)
  }
  const evaluate = () => {
    // eslint-disable-next-line 
    setCal(eval(cal).toString())
  }

  return (
    <Fragment>
      <h1 style={{ textAlign: 'center', textTransform: 'uppercase' }}>Calculator App</h1>
      <div className="calculator">
        <div className="result">

          {cal === '' ? display : cal}

        </div>
        <div className="operators">
          <button onClick={numberHandler} value='+'>+</button>
          <button onClick={numberHandler} value='-'>-</button>
          <button onClick={numberHandler} value='*'>*</button>
          <button onClick={numberHandler} value='/'>/</button>
        </div>
        <div className="numbers">
          <button onClick={numberHandler} value='9'>9</button>
          <button onClick={numberHandler} value='8'>8</button>
          <button onClick={numberHandler} value='7'>7</button>
          <button onClick={numberHandler} value='6'>6</button>
          <button onClick={numberHandler} value='5'>5</button>
          <button onClick={numberHandler} value='4'>4</button>
          <button onClick={numberHandler} value='3'>3</button>
          <button onClick={numberHandler} value='2'>2</button>
          <button onClick={numberHandler} value='1'>1</button>
          <button onClick={numberHandler} value='0'>0</button>
          <button onClick={evaluate}>=</button>
          <button onClick={clear} >Clear</button>
        </div>
      </div>
    </Fragment>
  )
}

export default App
