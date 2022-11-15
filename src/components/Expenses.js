import ExpenseComponent from "./ExpenseComponent";
import "./Styles/Expenses.css";

let Expenses = (props) => {
  return (
    <div className="expenses">
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
    </div>
  );
};

export default Expenses;
