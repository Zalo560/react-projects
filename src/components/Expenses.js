import React, { useState } from "react";

import ExpenseComponent from "./ExpenseComponent";
import ExpensesFilter from "./ExpensesFilter";

import Card from "./Card";
import "./Styles/Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {props.items.map((expense) => (
          <ExpenseComponent
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}

        {/* //! This is the old way of doing it
         <ExpenseComponent
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseComponent
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseComponent
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseComponent
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        /> 
         */}

      </Card>
    </div>
  );
};

export default Expenses;
