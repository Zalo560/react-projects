import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Expenses from "./components/Expenses";
import NewExpenseComponent from "./components/NewComponents/NewExpenseComponent";

// import Card from "./components/Card";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 500,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e2",
    title: "Rent",
    amount: 800,
    date: new Date(2022, 2, 1),
  },
  {
    id: "e3",
    title: "New TV",
    amount: 600,
    date: new Date(2022, 3, 28),
  },
  {
    id: "e4",
    title: "Water Bill",
    amount: 100,
    date: new Date(2022, 3, 2),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const onAddExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      {/* <Card> */}
      <div>
        <NewExpenseComponent onAddExpense={onAddExpenseHandler} />
        <Expenses items={expenses} />
      </div>
      {/* </Card> */}
    </div>
  );
};

export default App;
