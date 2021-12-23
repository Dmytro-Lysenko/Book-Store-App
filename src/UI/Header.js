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
  const [allBooks, setAllBooks] = useState(allBooksLi);
  const [navMenu, setNavMenu] = useState(nav);
  const [closeIcon, setCloseIcon] = useState(times);
  const [barsIcon, setBarsIcon] = useState(bars);
  const newCartCtx = useContext(NewCartContext);

  nav = classes.nav;
  times = classes.timesClose;
  bars = classes.bars;
  allBooksLi = classes.displayNone;

  const mobileMenuHandler = () => {
    console.log("clicked");
    nav = classes.navMobile;
    times = classes.timesOpen;
    bars = classes.barsClose;
    allBooksLi = classes.displayUnset;
    setNavMenu(nav);
    setCloseIcon(times);
    setBarsIcon(bars);
    setAllBooks(allBooksLi);
  };

  const closeIconHandler = () => {
    times = classes.timesClose;
    nav = classes.nav;
    setCloseIcon(times);
    setNavMenu(nav);
    setBarsIcon(bars);
    setAllBooks(allBooksLi);
  };

  return (
    <header className={classes.header}>
      <nav>
        <ul className={!navMenu ? nav : navMenu}>
          <li
            onClick={closeIconHandler}
            className={!closeIcon ? times : closeIcon}
          >
            <FaTimes />
          </li>
          <li className={!allBooks ? allBooksLi : allBooks}>
            <Link to="/">All books</Link>
          </li>
          <li className={classes.favorites}>
            <Link to="/favorites"> Favorites</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
            <span className={classes.badge}>
              {newCartCtx.booksInCart ? newCartCtx.booksInCart.length : ""}
            </span>
          </li>
          <li className={classes.addNewBook}>
            <Link to="/add-new-book">Add new book</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
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
