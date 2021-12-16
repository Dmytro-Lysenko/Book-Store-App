import { useState, useRef } from "react";
import { useContext } from "react";
import CartPricesContext from "../../store/cartPrices-context";

import classes from "./CartBookItem.module.css";

const CartBookItem = (props) => {
  const cartTotalPriceCtx = useContext(CartPricesContext);

  // const price = +props.price;
  const [amountValue, setamountValue] = useState(1);

  const [bookFieldPrice, setBookFieldPrice] = useState(+props.price);

  const [totalPrices, setTotalPrices] = useState(bookFieldPrice);

  // console.log(typeof bookFieldPrice);
  const amountInput = useRef();
  cartTotalPriceCtx.totalPrices = bookFieldPrice;

  const decreaseHandler = (event) => {
    const enteredAmount = amountInput.current.value;

    if (1 < enteredAmount) {
      setamountValue(amountValue - 1);
      setBookFieldPrice((prev) => {
        return (prev = bookFieldPrice - +props.price);
      });
      cartTotalPriceCtx.prices.splice(
        cartTotalPriceCtx.prices.indexOf(+props.price),
        1
      ); // prices.splice(prices.indexOf(price), 1);
      const test = cartTotalPriceCtx.prices;
      cartTotalPriceCtx.decreasePrices(test);
      console.log(test);

      console.log("this is total", cartTotalPriceCtx.totalPrices);
    }
  };

  const increaseHandler = (event) => {
    const enteredAmount = +amountInput.current.value;
    // const price = +props.price * enteredAmount;
    const updatedAmount = enteredAmount;
    console.log("UPDATEDAMOUNT", updatedAmount);
    if (enteredAmount < 11) {
      setamountValue((prev) => {
        return amountValue + 1;
      });
      setBookFieldPrice((prev) => {
        return (prev = +props.price + bookFieldPrice);
      });
      // setTotalPrices((prev) => {
      //   return (prev = totalPrices + +props.price);
      // });
      // cartTotalPriceCtx.addtoPrices(bookFieldPrice + +props.price);
      cartTotalPriceCtx.setTotalPrice(+props.price);
    }

    // console.log(typeof enteredAmount, typeof price, typeof bookFieldPrice);

  };

  return (
    <div>
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
          <h1>{bookFieldPrice.toFixed(2)}</h1>
        </div>
      </section>
    </div>
  );
};

export default CartBookItem;
