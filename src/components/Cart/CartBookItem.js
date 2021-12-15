import { useState, useRef } from "react";

import classes from "./CartBookItem.module.css";

const CartBookItem = (props) => {
    const price = +props.price;
  const [amountValue, setamountValue] = useState(1);
  const [bookFieldPrice, setBookFieldPrice] = useState(price);
 
  console.log(typeof bookFieldPrice);
  const amountInput = useRef();

  const decreaseHandler = (event) => {
    const enteredAmount = amountInput.current.value;

    if (0 < enteredAmount) {
      setamountValue(amountValue - 1);
      setBookFieldPrice((prev) => {
        return (prev = enteredAmount - props.price);
      });
    }
  };

  const increaseHandler = (event) => {
    const enteredAmount = +amountInput.current.value;
    const price = +props.price * enteredAmount;

    if (enteredAmount < 11) {
      setamountValue((prev) => {
        return +amountValue + 1;
      });
      setBookFieldPrice((prev) => {
        return (prev = props.price + price);
      });
    }
    console.log(typeof enteredAmount, typeof price, typeof bookFieldPrice);
  };

  return (
    <section className={classes.section}>
      <div className={classes.photo}>
        <img src={props.photo} alt={props.title} />
      </div>
      <div className={classes.about}>
        <h1 className={classes.title}>{props.title}</h1>
        <h2 className={classes.author}>{props.author}</h2>
        <h3 className={classes.price}>Book price: {props.price} $</h3>
      </div>
      <div className={classes.actions}>
        <div className={classes.input}>
          <span onClick={decreaseHandler}>-</span>
          <input
            id="book"
            type="number"
            // defaultValue="1"
            min="1"
            max="9"
            step="1"
            ref={amountInput}
            value={amountValue}
          />
          <span onClick={increaseHandler}>+</span>
        </div>
        <h1>{bookFieldPrice}</h1>
      </div>
    </section>
  );
};

export default CartBookItem;
