import "./ExpenseComponent.css";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";

let ExpenseComponent = (props) => {

  return (
    <Card className="expense-component-item">
      <ExpenseDate date={props.date} />
      <div className="expense-component-details">
        <h2 className="expense-component-title">{props.title}</h2>
        <div className="expense-component-amount">${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseComponent;
