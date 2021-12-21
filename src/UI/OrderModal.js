import React from "react";
import classes from "./OrderModal.module.css";
import { CartContext } from "../App";
import CartPricesContext from "../store/cartPrices-context";
import NewCartContext from "../store/newCart-context";
import { useContext, useState } from "react";

const OrderModal = React.memo((props) => {
  const prices = [];
  const [totalPrice, setTotalPrice] = useState(prices);
  const cartCtx = useContext(CartContext);
  const cartPricesCtx = useContext(CartPricesContext);
  const newCartCtx = useContext(NewCartContext);
  // console.log('THIS IS TOTALPRICES',cartPricesCtx.totalPrices);
  // console.log(cartCtx.cartValue);
  console.log(newCartCtx.booksInCart);

  const cartPrice = cartCtx.cartValue.map((book) => {
    prices.push(book.totalPrice);
    const totalPrices = prices.reduce((a, b) => a + b, 0);
    return totalPrices;
  });
  // console.log(cartCtx.cartValue.map(price => cartCtx.cartValue.totalPrice));

  //   const totalPrices = prices.reduce((a, b) => a + b, 0);
  const totalCartPrice = cartPrice.pop();

  return (
    <React.Fragment>
      <div className={classes.backdrop} onClick={props.onClose} />
      <div className={classes["error-modal"]}>
        <h2 className={classes.title}>Your order is :</h2>
        {newCartCtx.booksInCart.map((book) => (
          <div className={classes.book} key={book.id}>
            <h2>
              Book: <span>{book.title}</span>
            </h2>
            <h2>
              Pcs: <span>{book.pcs}</span>
            </h2>
            <h2>
              Price: <span>{book.totalPrice}</span>
            </h2>
          </div>
        ))}
        <div className={classes.total}>
          {/* <h1>{totalPrice.toFixed(2)}</h1> */}
          <h2>Total Price : {totalCartPrice}</h2>
        </div>
        <p>{props.children}</p>
        <div className={classes.actions}>
          <button type="button" onClick={props.onClose}>
            Close
          </button>
        </div>
      </div>
    </React.Fragment>
  );
});

export default OrderModal;
