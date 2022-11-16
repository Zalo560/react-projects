import React from "react";

import "./NewExpenseComponent.css";
import NewExpenseForm from "./NewExpenseForm";

const NewExpensecomponent = (props) => {
  const onSubmitExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <NewExpenseForm onSubmitExpenseData={onSubmitExpenseDataHandler} />
    </div>
  );
};

export default NewExpensecomponent;
