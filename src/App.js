import React, { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
import ExpenseButton from "./Components/ExpenseButton/ExpenseButton";

const dummyExpenses = [
  { id: "3", title: "Almonds", amount: 300.0, date: new Date(2022, 0, 15) },
  { id: "34", title: "Momos", amount: 70.0, date: new Date(2022, 7, 30) },
  { id: "1", title: "Books", amount: 240.0, date: new Date(2021, 0, 13) },
  { id: "2", title: "Pens", amount: 150.0, date: new Date(2020, 0, 14) },
];

function App() {
  let expenseBttn;
  const [expenses, addNewExpense] = useState(dummyExpenses);

  const newExpenseHandler = (newExpenseData) => {
    // console.log(newExpenseData);
    addNewExpense((prevExpenses) => {
      return [newExpenseData, ...prevExpenses];
    });
  };
  // console.log(expenses);

  const collapseFormHandler = () => {
    setExpenseBttnContent(expenseBttn);
    // console.log("Inside the collapse handler");
  };

  const expenseBttnHandler = () => {
    const expenseForm = (
      <NewExpense
        onNewExpenseData={newExpenseHandler}
        onCancelButton={collapseFormHandler}
      />
    );
    setExpenseBttnContent(expenseForm);
    // console.log("Epxand expense form");
  };
  expenseBttn = <ExpenseButton onExpenseBttn={expenseBttnHandler} />;
  const [expenseBttnContent, setExpenseBttnContent] = useState(expenseBttn);

  return (
    <div>
      {expenseBttnContent}
      <Expenses expenseData={expenses} />
    </div>
  );
}

export default App;
