import { useContext } from "react";
import { useState } from "react/cjs/react.development";
import { CartContext } from "../App";
import NewCartContext from "../store/newCart-context";

import CartContainer from "../components/Cart/CartContainer";
import CartItemsList from "../components/Cart/CartItemsList";
import CartPricesContext from "../store/cartPrices-context";
import OrderModal from "../UI/OrderModal";

const AddNewBook = () => {
  const cartCtx = useContext(CartContext);
  const cartPricesCtx = useContext(CartPricesContext);
  const newCartCtx = useContext(NewCartContext);
  console.log(newCartCtx.booksInCart);

  const [totalCartBookPrice, setTotalCartBookPrice] = useState(
    newCartCtx.totalPriceOfBooks
  );
  const [order, setOrder] = useState(false);

  // console.log(newCartCtx.totalPriceOfBooks);

  const clearCartHandler = () => {
    cartCtx.cartDispatch({
      type: "CLEAR",
    });
  };

  const payCartHandler = () => {
    setOrder(true);
    // console.log("CartPrices from pay ", cartPricesCtx);

    // const prices = [];

    // cartCtx.cartValue.map((book) => {
    //   const updBook = {
    //     title: book.title,
    //     pcs: book.pcs,
    //     totalItemPrice: book.totalPrice,
    //     ...book,
    //   };
    //   prices.push(book.totalPrice);
    //   return updBook;
    // });
    // console.log(prices);

    // console.log(
    //   cartCtx.cartValue.map((book) => {
    //     const updBook = {
    //       title: book.title,
    //       pcs: book.pcs,
    //       totalItemPrice: book.totalPrice,
    //       ...book,
    //     };
    //     return updBook;
    //   })
    // );
  };

  const closeHandler = () => {
    setOrder(false);
  };

  // console.log("THIS IS TOTAL FROM CAART", cartPricesCtx.totalPrices);

  return (
    <div>
      <div>
        {newCartCtx.booksInCart.length === 0 ? (
          <h1>There is no books in Cart</h1>
        ) : (
          <CartContainer cartBook={newCartCtx.booksInCart} />
        )}
      </div>

      <div>
        {newCartCtx.booksInCart.length === 0 ? (
          " "
        ) : (
          <h1>Total: {newCartCtx.totalPriceOfBooks}</h1>
        )}
      </div>
      <div>
        <button onClick={payCartHandler}>Pay the order</button>
      </div>
      <div>
        {newCartCtx.booksInCart.length !== 0 && (
          <button onClick={clearCartHandler}>Clear the cart</button>
        )}
      </div>
      {order && <OrderModal onClose={closeHandler} />}
    </div>
  );
};

export default AddNewBook;
