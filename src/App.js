import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Marathon starter kit',
    amount: 29,
    date: new Date(2022, 1, 14)
  },
  {
    id: 'e2',
    title: 'New AirPods 3',
    amount: 179,
    date: new Date(2022, 1, 12)
  },
  {
    id: 'e3',
    title: 'Getmancar',
    amount: 77,
    date: new Date(2022, 2, 28)
  },
  {
    id: 'e4',
    title: 'New MacBook Pro 14" 512Gb',
    amount: 1999,
    date: new Date(2022, 3, 12)
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })

    console.log('In App.js')
    console.log(expense)
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(ExpenseList, {items: expenses})
  // );
}

export default App;