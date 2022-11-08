import ExpenseComponent from "./components/ExpenseComponent";
 
function App() {
  //data sample for ExpenseComponent testing
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 500,
      date: new Date(2022, 2, 28),
    },
    {
      id: "e2",
      title: "Rent",
      amount: 1000,
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

  return (
    <div>
      <h2> Money Moves </h2>

      <ExpenseComponent
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseComponent
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseComponent
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseComponent
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
      
    </div>
  );
}

export default App;
