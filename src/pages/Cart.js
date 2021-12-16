import { useContext } from "react";
import { CartContext } from "../App";
import BooksList from "../components/Books/BooksList";
import CartContainer from "../components/Cart/CartContainer";
import CartItemsList from "../components/Cart/CartItemsList";
import CartPricesContext from "../store/cartPrices-context";

const AddNewBook = () => {
  const cartCtx = useContext(CartContext);
  const cartPricesCtx = useContext(CartPricesContext);

  const clearCartHandler = () => {
    cartCtx.cartDispatch({
      type: "CLEAR",
    });
  };

  console.log("THIS IS TOTAL FROM CAART", cartPricesCtx.totalPrices);

  return (
    <div>
      <div>
        {cartCtx.cartValue.length === 0 ? (
          <h1>There is no books in Cart</h1>
        ) : (
          <CartContainer cartBook={cartCtx.cartValue} />
        )}
      </div>

      <div>
        {cartCtx.cartValue.length === 0 ? (
          " "
        ) : (
          <h1>Total: {cartPricesCtx.totalPrices.toFixed(2)}</h1>
        )}
      </div>
      <div>
        {cartCtx.cartValue.length !== 0 && (
          <button onClick={clearCartHandler}>Clear the cart</button>
        )}
      </div>
    </div>
  );
};

export default AddNewBook;
