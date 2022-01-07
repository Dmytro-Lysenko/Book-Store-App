import { useState, useRef } from "react";
import { useContext } from "react";
import CartPricesContext from "../../store/cartPrices-context";
import NewCartContext from "../../store/newCart-context";

import classes from "./CartBookItem.module.css";

const CartBookItem = (props) => {
  const cartTotalPriceCtx = useContext(CartPricesContext);
  const newcCartCtx = useContext(NewCartContext);


  const [amountValue, setAmountValue] = useState(1);

  const [bookFieldPrice, setBookFieldPrice] = useState(+props.price);
  const [totalCartBookPrice, setTotalCartBookPrice] = useState(
    newcCartCtx.totalPriceOfBooks
  );

  const amountInput = useRef();
  cartTotalPriceCtx.totalPrices = bookFieldPrice;

  const decreaseHandler = (event) => {
    const enteredAmount = amountInput.current.value;
    if (1 < enteredAmount) {
      setAmountValue((prev) => {
        return amountValue - 1;
      });
      setTotalCartBookPrice(totalCartBookPrice - props.price);
      setBookFieldPrice((prev) => {
        return (prev = bookFieldPrice - props.price);
      });

      newcCartCtx.decreaseBook(props.id, props);
    } else {
     
    }
    
  };

  const increaseHandler = (event) => {
  
    const enteredAmount = +amountInput.current.value;

 

    if (enteredAmount < 11) {
      setAmountValue((prev) => {
        return amountValue + 1;
      });
      setTotalCartBookPrice(totalCartBookPrice + props.price);

      setBookFieldPrice((prev) => {
        return (prev = +props.price + bookFieldPrice);
      });

      newcCartCtx.increaseBook(props.id, props);

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
              onChange={(e)=> setAmountValue(e.target.value)}
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
