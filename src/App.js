import Navbar from "./components/Navbar";
import Expenses from "./components/Expenses";
import "./components/Navbar.css";
 
function App() {
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

  return (
    <div>
      <div>
      <Navbar />
      </div>
      <div>
      <Expenses items={expenses} />
      </div>
    </div>
  );
}

export default App;