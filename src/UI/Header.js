import { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import { CartContext } from "../App";

const Header = () => {
  const cartCtx = useContext(CartContext);
 
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
            {cartCtx.cartValue ? (
              cartCtx.cartValue.length
            ) : (
              <p>There are no length</p>
            )}
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
