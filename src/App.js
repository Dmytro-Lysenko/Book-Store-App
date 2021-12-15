import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./UI/Header";
import AllBooks from "./pages/AllBooks";
import AddNewBook from "./pages/AddNewBook";
import Cart from "./pages/Cart";
import FavoritesBooks from "./pages/FavoritesBooks";
import Book from "./components/Books/Book";
import { AllBooksContextProvider } from "./store/allBooks-context";
import { FavoritesContextProvider } from "./store/favorites-context";

function App() {
  return (
    <Fragment>
      <AllBooksContextProvider>
        <FavoritesContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<AllBooks />}></Route>
            <Route path="/favorites" element={<FavoritesBooks />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/add-new-book" element={<AddNewBook />}></Route>
            <Route path="/books/:bookId" element={<Book />}></Route>
          </Routes>
        </FavoritesContextProvider>
      </AllBooksContextProvider>
    </Fragment>
  );
}

export default App;
