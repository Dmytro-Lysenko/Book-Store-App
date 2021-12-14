import { Fragment } from "react";
import { Route, Routes } from "react-router";
import Header from "./UI/Header";
import AllBooks from "./pages/AllBooks";
import AddNewBook from "./pages/AddNewBook";
import Cart from "./pages/Cart";
import FavoritesBooks from "./pages/FavoritesBooks";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<AllBooks />}></Route>
        <Route path="/favorites" element={<FavoritesBooks />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/add-new-book" element={<AddNewBook />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
