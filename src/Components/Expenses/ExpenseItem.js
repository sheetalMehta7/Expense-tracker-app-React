import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  // const [title, setTitleHandler] = useState(props.title);
  // const editTitleHandler = () => {
  //   setTitleHandler("updated");
  // };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">Rs. {props.amount}</div>
      {/* <button onClick={editTitleHandler}>Edit Title</button> */}
    </Card>
  );
}

export default ExpenseItem;
