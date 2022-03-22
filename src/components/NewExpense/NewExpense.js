import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';

import './NewExpense.css'

const NewExpense = (props) => {
  const [isEditing, setIsEdeting] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    console.log(expenseData)
    props.onAddExpense(expenseData)
    setIsEdeting(false)
  }

  const startEdetingHandler = () => {
    setIsEdeting(true)
  }

  const stopEdetingHandler = () => {
    setIsEdeting(false)
  }

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEdetingHandler}>Add New Expense</button>}
      {isEditing &&
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEdetingHandler}
        />}
    </div>
  )
}

export default NewExpense;