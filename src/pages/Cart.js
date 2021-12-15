import { useContext } from "react";
import { CartContext } from "../App";
import BooksList from "../components/Books/BooksList";
import CartContainer from "../components/Cart/CartContainer";
import CartItemsList from "../components/Cart/CartItemsList";

const AddNewBook = () => {
  const cartCtx = useContext(CartContext);

  const clearCartHandler = () => {
    cartCtx.cartDispatch({
      type: "CLEAR",
    });
  };

  return (
    <div>
      {cartCtx.cartValue.length === 0 ? (
        <h1>There is no favorites books</h1>
      ) : (
        <BooksList allBooks={cartCtx.cartValue} />
      )}
      <div>
        {cartCtx.cartValue.length !== 0 && (
          <button onClick={clearCartHandler}>Clear the cart</button>
        )}
      </div>
      <CartContainer cartBook={cartCtx.cartValue} />
    </div>
  );
};

export default AddNewBook;
