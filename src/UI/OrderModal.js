import React from "react";
import { useNavigate } from "react-router";
import classes from "./OrderModal.module.css";
import OrderSuccessModal from "./OrderSuccessModal";

import NewCartContext from "../store/newCart-context";
import { useContext, useState } from "react";

const OrderModal = React.memo((props) => {
  const navigate = useNavigate();
  const [orderSuccess, setOrderSuccess] = useState(false);
  const prices = [];
  const random = Number(Math.random().toString().substring(4));

  const newCartCtx = useContext(NewCartContext);

  const cartPrice = newCartCtx.booksInCart.map((book) => {
    prices.push(book.totalPrice);
    const totalPrices = prices.reduce((a, b) => a + b, 0);
    return totalPrices;
  });
  const closeOrderSuccessModalHandler = () => {
    setOrderSuccess(false);
  };

  console.log(cartPrice.length);
  if (cartPrice.length === 0) {
    return <OrderSuccessModal onClose={closeOrderSuccessModalHandler} />;
  }

  const totalCartPrice = cartPrice.pop().toFixed(2);

  const orderHandler = () => {
    setOrderSuccess(true);
    const newBook = newCartCtx.booksInCart.map((book) => book);

    const updNewBook = {
      totalprice: +totalCartPrice,
      key: random,
      ...newBook,
    };
    fetch(
      "https://react-app-81b61-default-rtdb.europe-west1.firebasedatabase.app/cart-orders.json",
      {
        method: "POST",
        body: JSON.stringify(updNewBook),
      }
    ).catch((err) => {
      console.error(err);
    });

    newCartCtx.clearCart();
  };

  if (orderSuccess) {
    return <OrderSuccessModal onClose={closeOrderSuccessModalHandler} />;
  }

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
          <h2>Total Price : {totalCartPrice}</h2>
        </div>
        <p>{props.children}</p>
        <div className={classes.actions}>
          <button type="button" onClick={orderHandler}>
            Order
          </button>
          <button type="button" onClick={props.onClose}>
            Close
          </button>
        </div>
      </div>
    </React.Fragment>
  );
});

export default OrderModal;
