import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const currentYear = new Date().getFullYear().toString();
  const [selectYear, setSelectYear] = useState(currentYear);

  const optionSelectHandler = (year) => {
    setSelectYear(year);
    console.log(year);
  };

  const filteredItems = props.expenseData.filter((expense) => {
    return expense.date.getFullYear().toString() === selectYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          defaultYear={selectYear}
          onOptionSelect={optionSelectHandler}
        />
        {filteredItems.length >= 1 && (
          <ExpenseChart chartData={filteredItems} />
        )}
        <ExpenseList item={filteredItems} />
      </Card>
    </div>
  );
}

export default Expenses;
