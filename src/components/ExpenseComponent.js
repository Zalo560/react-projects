import React, { useState } from "react";
import "./Styles/ExpenseComponent.css";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";

let ExpenseComponent = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };

  return (
    <Card className="expense-component-item">
      <div className="expense-component-details">
        <ExpenseDate date={props.date} />
        <h2 className="expense-component-title">{title}</h2>
        <div className="expense-component-amount">${props.amount}</div>
        <button className="expense-component-edit-button" onClick={clickHandler}>Edit</button>
      </div>
    </Card>
  );
};

export default ExpenseComponent;
