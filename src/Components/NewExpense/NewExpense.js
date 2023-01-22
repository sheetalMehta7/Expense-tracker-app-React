import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const newExpenseHandler = (newExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...newExpenseData,
    };
    props.onNewExpenseData(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm
        onNewExpenseSubmit={newExpenseHandler}
        onCancelBttn={props.onCancelButton}
      />
    </div>
  );
}

export default NewExpense;
