import React, { useState, useRef } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

function MealItemForm(props) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInutRef.current.value;
    console.log(enteredAmount);
    const enterdAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enterdAmountNumber === 0 ||
      enterdAmountNumber > 5
    ) {
      return setAmountIsValid(false);
    }
    props.onAddToCart(enterdAmountNumber);
  };
  const amountInutRef = useRef();
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
      
        ref={amountInutRef}
        label="Amount"
        input={{
          type: 'number',
          id: "amount_" + props.id,
          tilte: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />

      <button>+ Add</button>
      {!amountIsValid && <p>Please enter valid amount(1-5)</p>}
    </form>
  );
}

export default MealItemForm;
