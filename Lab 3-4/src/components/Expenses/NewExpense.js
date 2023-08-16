import ExpenseForm from "../Form/ExpenseForm";
import "./NewExpense.css";
import React, { useState } from "react";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enterExpenseData) => {
    const expenseData = {
      // enterExepenseData la dat ten moi cho gia tri cu cua expenseData
      ...enterExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const cancelEditing = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelEditing}
        />
      )}
    </div>
  );
}

export default NewExpense;
