import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  //Multiple states
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //single state
  // const [userInput, setuserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const setExpensedata = (event) => {
    event.preventDefault();

    const newExpense = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    // console.log(newExpense);
    props.onNewExpenseSubmit(newExpense); //passing on to NewExpense component
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // setuserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    //better way of doing this problem when our data depends on the previous data
    // setuserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // setuserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });

    // setuserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // setuserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });

    // setuserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
  };

  const collapseExpenseFormHandler = () => {
    props.onCancelBttn();
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    // console.log("Cancel Button clicked");
  };

  return (
    <form onSubmit={setExpensedata}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={collapseExpenseFormHandler}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
