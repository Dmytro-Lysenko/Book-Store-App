import { createContext, Fragment, useReducer, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./UI/Header";
import AllBooks from "./pages/AllBooks";
import AddNewBook from "./pages/AddNewBook";
import Cart from "./pages/Cart";
import FavoritesBooks from "./pages/FavoritesBooks";
import Book from "./components/Books/Book";
import { AllBooksContextProvider } from "./store/allBooks-context";
import { FavoritesContextProvider } from "./store/favorites-context";

export const CartContext = createContext();
const inCardState = [];
const cardReducer = (state, action) => {
  switch (action.type) {
    case "SET":
      console.log(action.empls);
      return [state, ...action.books];
    case "ADD":
      return [...state, action.book];
    case "ISINCART":
      return state.some((book) => book.id === action.id);

    case "DEL":
      console.log(action.id);
      return state.filter((ing) => ing.id !== action.id);
    default:
      return state;
  }
};

function App() {
  const [cart, dispatchCart] = useReducer(cardReducer, inCardState);
  // const cartCtx = useReducer(CartContext);
  console.log("this is cart", cart);

  return (
    <Fragment>
      <AllBooksContextProvider>
        <FavoritesContextProvider>
          <CartContext.Provider
            value={{
              cartValue: cart,
              cartDispatch: dispatchCart,
            }}
          >
            <Header />
            <Routes>
              <Route path="/" element={<AllBooks />}></Route>
              <Route path="/favorites" element={<FavoritesBooks />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/add-new-book" element={<AddNewBook />}></Route>
              <Route path="/books/:bookId" element={<Book />}></Route>
            </Routes>
          </CartContext.Provider>
        </FavoritesContextProvider>
      </AllBooksContextProvider>
    </Fragment>
  );
}

export default App;
