import React from "react";

import "./NewExpenseComponent.css";
import NewExpenseForm from "./ExpenseForm";

const NewExpensecomponent = () => {
  return (<div className="new-expense">
    {/* <form></form> */}
    <NewExpenseForm />
  </div>);
};

export default NewExpensecomponent;