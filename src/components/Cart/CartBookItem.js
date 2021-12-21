import { useState, useRef } from "react";
import { useContext } from "react";
import { CartContext } from "../../App";
import CartPricesContext from "../../store/cartPrices-context";
import NewCartContext from "../../store/newCart-context";

import classes from "./CartBookItem.module.css";

const CartBookItem = (props) => {
  const cartTotalPriceCtx = useContext(CartPricesContext);
  const cartCtx = useContext(CartContext);
  const newcCartCtx = useContext(NewCartContext);
  // console.log(props);
  // console.log(newcCartCtx.booksInCart);

  // const price = +props.price;
  const [amountValue, setamountValue] = useState(1);

  const [bookFieldPrice, setBookFieldPrice] = useState(+props.price);
  const [totalCartBookPrice, setTotalCartBookPrice] = useState(
    newcCartCtx.totalPriceOfBooks
  );

  console.log(totalCartBookPrice);

  // const [totalPrices, setTotalPrices] = useState(bookFieldPrice);

  // console.log(typeof bookFieldPrice);
  const amountInput = useRef();
  cartTotalPriceCtx.totalPrices = bookFieldPrice;

  // console.log(newcCartCtx.booksInCart);

  const decreaseHandler = (event) => {
    const enteredAmount = amountInput.current.value;
    console.log(enteredAmount);
    if (1 < enteredAmount) {
      setamountValue((prev) => {
        return amountValue - 1;
      });
      setTotalCartBookPrice(totalCartBookPrice - props.price);
      setBookFieldPrice((prev) => {
        return (prev = bookFieldPrice - props.price);
      });

      newcCartCtx.decreaseBook(props.id, props);
    } else {
      console.log("MENSHE 1");
    }
    // console.log(props.pcs-1);
    // const updBook = {
    //   pcs: props.pcs,
    //   ...props,
    // };

    // console.log("this is --", newcCartCtx.booksInCart);
    /////New code

    // if (1 < enteredAmount) {
    //   setamountValue(amountValue - 1);
    //   setBookFieldPrice((prev) => {
    //     return (prev = bookFieldPrice - +props.price);
    //   });
    //   cartTotalPriceCtx.prices.splice(
    //     cartTotalPriceCtx.prices.indexOf(+props.price),
    //     1
    //   ); // prices.splice(prices.indexOf(price), 1);
    //   const test = cartTotalPriceCtx.prices;
    //   cartTotalPriceCtx.decreasePrices(test);
    // }
    //////////////////
  };

  const increaseHandler = (event) => {
    console.log(newcCartCtx.booksInCart);
    ///////////////////NEW CODE
    const enteredAmount = +amountInput.current.value;

    ////////////////////NEW CODE
    // const price = +props.price * enteredAmount;

    if (enteredAmount < 11) {
      setamountValue((prev) => {
        return amountValue + 1;
      });
      setTotalCartBookPrice(totalCartBookPrice + props.price);

      setBookFieldPrice((prev) => {
        return (prev = +props.price + bookFieldPrice);
      });

      newcCartCtx.increaseBook(props.id, props);

      ////////////////////NEW CODE
    }
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
