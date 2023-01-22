import React from "react";
import "./ExpenseButton.css";

const ExpenseButton = (props) => {
  const expandExpenseFormHandler = () => {
    props.onExpenseBttn();
    // console.log("expense button clicked!!!");
  };

  return (
    <div className="new-expense">
      <button onClick={expandExpenseFormHandler}>Add Expenses</button>
    </div>
  );
};

export default ExpenseButton;
