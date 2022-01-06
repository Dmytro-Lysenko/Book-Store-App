import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

import NewCartContext from "../store/newCart-context";

const Header = () => {
  let nav;
  let times;
  let bars;
  let allBooksLi;
  let addNewBookLi;
  let favoritesBookLi;
  addNewBookLi = classes.addNewBook;
  favoritesBookLi = classes.favorites;

  const [allBooks, setAllBooks] = useState(allBooksLi);
  const [addNewBook, setAddNewBook] = useState(addNewBookLi);
  const [favoritesBook, setFavoritesBook] = useState(favoritesBookLi);
  const [navMenu, setNavMenu] = useState(nav);
  const [closeIcon, setCloseIcon] = useState(times);
  const [barsIcon, setBarsIcon] = useState(bars);
  const newCartCtx = useContext(NewCartContext);

  nav = classes.nav;
  times = classes.timesClose;
  bars = classes.bars;

  const mobileMenuHandler = () => {
    console.log("clicked");
    nav = classes.navMobile;
    times = classes.timesOpen;
    bars = classes.barsClose;
    allBooksLi = classes.displayUnset;
    addNewBookLi = classes.displayUnset;
    favoritesBookLi = classes.displayUnset;
    setNavMenu(nav);
    setCloseIcon(times);
    setBarsIcon(bars);
    setAllBooks(allBooksLi);
    setAddNewBook(addNewBookLi);
    setFavoritesBook(favoritesBookLi);
  };

  const closeIconHandler = () => {
    times = classes.timesClose;
    nav = classes.nav;
    // addNewBookLi = classes.addNewBook;
    // favoritesBookLi = classes.favorites;
    setCloseIcon(times);
    setNavMenu(nav);
    setBarsIcon(bars);
    setAllBooks(allBooksLi);
    setAddNewBook(addNewBookLi);
    setFavoritesBook(favoritesBookLi);
  };

  return (
    <header className={classes.header}>
      <div
        style={{
          textAlign: "center",
          padding: "10px",
          backgroundColor: "orange",
        }}
      >
        Currently in development <a
          href="https://github.com/Dmytro-Lysenko/Book-Store-App"
          rel="noreferrer"
          target="_blank"
        >
           Source code
        </a>
      </div>
      <nav>
        <ul className={!navMenu ? nav : navMenu}>
          <li
            onClick={closeIconHandler}
            className={!closeIcon ? times : closeIcon}
          >
            <FaTimes />
          </li>
          <li className={!allBooks ? allBooksLi : allBooks}>
            <Link to="/Book-Store-App/">All books</Link>
          </li>
          <li className={favoritesBook}>
            <Link to="/Book-Store-App/favorites"> Favorites</Link>
          </li>
          <li>
            <Link to="/Book-Store-App/cart">Cart</Link>
            <span className={classes.badge}>
              {newCartCtx.booksInCart ? newCartCtx.booksInCart.length : ""}
            </span>
          </li>
          <li className={addNewBook}>
            <Link to="/Book-Store-App/add-new-book">Add new book</Link>
          </li>
          <li>
            <Link to="/Book-Store-App/orders">Orders</Link>
          </li>
          <li
            onClick={mobileMenuHandler}
            className={!barsIcon ? bars : barsIcon}
          >
            <FaBars />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
