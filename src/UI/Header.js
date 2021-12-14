import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">All books</Link>
          </li>
          <li>
            <Link to="/favorites"> Favorites</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/add-new-book">Add new book</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
