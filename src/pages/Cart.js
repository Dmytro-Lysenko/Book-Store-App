import { useContext, useState } from "react";
import NewCartContext from "../store/newCart-context";
import CartContainer from "../components/Cart/CartContainer";
import OrderModal from "../UI/OrderModal";
import classes from "./Cart.module.css";

const AddNewBook = () => {
  const newCartCtx = useContext(NewCartContext);
  const [order, setOrder] = useState(false);

  const clearCartHandler = () => {
    newCartCtx.clearCart();
  };

  const payCartHandler = () => {
    setOrder(true);
  };

  const closeHandler = () => {
    setOrder(false);
  };

  const totalCartPrice = newCartCtx.totalPriceOfBooks.toFixed(2);

  return (
    <div className={classes.container}>
      <div>
        {newCartCtx.booksInCart.length === 0 ? (
          <h1 className={classes.noitems}>There is no books in Cart</h1>
        ) : (
          <CartContainer cartBook={newCartCtx.booksInCart} />
        )}
      </div>

      <div>
        {newCartCtx.booksInCart.length === 0 ? (
          " "
        ) : (
          <h1 className={classes.total}>Total: {totalCartPrice}</h1>
        )}
      </div>
      <div className={classes.order}>
        {newCartCtx.booksInCart.length === 0 ? (
          " "
        ) : (
          <button classes={classes.noitems} onClick={payCartHandler}>
            Pay the order
          </button>
        )}
      </div>
      <div className={classes.clear}>
        {newCartCtx.booksInCart.length !== 0 && (
          <button onClick={clearCartHandler}>Clear the cart</button>
        )}
      </div>
      {order && <OrderModal onClose={closeHandler} />}
    </div>
  );
};

export default AddNewBook;
