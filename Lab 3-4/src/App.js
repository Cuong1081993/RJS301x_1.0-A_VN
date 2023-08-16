import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/Expenses/NewExpense";
import React, { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Car Insurance",
    amount: 243.5,
    date: new Date(2021, 2, 20),
  },
  {
    id: 2,
    title: "New Tv",
    amount: 110,
    date: new Date(2019, 2, 22),
  },
  {
    id: 3,
    title: "Coffe Shop",
    amount: 12.5,
    date: new Date(2020, 2, 10),
  },
  {
    id: 4,
    title: "Hidden Dragon ",
    amount: 2,
    date: new Date(2022, 2, 12),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    //in ra phan tu expense dau tien trong mang
    //...de lay lai cac phan tu trong mang expenses

    setExpenses((prevExpenses) => {
   
      return [expense, ...prevExpenses];
      
    });
    
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
}

export default App;
