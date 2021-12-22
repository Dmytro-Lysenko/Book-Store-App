import { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";

import NewCartContext from "../store/newCart-context";

const Header = () => {
  const newCartCtx = useContext(NewCartContext);

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.nav}>
          <li>
            <Link to="/">All books</Link>
          </li>
          <li>
            <Link to="/favorites"> Favorites</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
            <span className={classes.badge}>
              {newCartCtx.booksInCart ? newCartCtx.booksInCart.length : ""}
            </span>
          </li>
          <li>
            <Link to="/add-new-book">Add new book</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
