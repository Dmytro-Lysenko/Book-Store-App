import "./BookItem.css";
import FavoritesContext from "../../store/favorites-context";
import CartPricesContext from "../../store/cartPrices-context";
import { useContext } from "react";
import { Link } from "react-router-dom";

import NewCartContext from "../../store/newCart-context";

const BookItem = (props) => {
  const favoritesCtx = useContext(FavoritesContext);
  const cartPricesCtx = useContext(CartPricesContext);

  const newCartContext = useContext(NewCartContext);

  const isFavorite = favoritesCtx.isFavorite(props.id);

  const isInNewCart =
    newCartContext.booksInCart &&
    newCartContext.booksInCart.some((book) => book.id === props.id);

  const addToCartHandler = (newBook) => {
    const updNewBook = {
      key: newBook.id,
      pcs: 1,
      totalPrice: +newBook.price,
      price: +newBook.price,
      ...newBook,
    };

    newCartContext.addBook(updNewBook);
    if (isInNewCart) {
      newCartContext.deleteBook(newBook.id);
    }

    cartPricesCtx.setTotalPrice(+props.price);
  };

  const addHandler = (book) => {
    if (isFavorite) {
      favoritesCtx.deleteFromFavoriteBook(props.id);
    } else {
      favoritesCtx.addtoFavoriteBook(book);
    }
  };

  const deleteHandler = (bookId) => {
    props.onDel(bookId);
  };

  return (
    <section className="section">
      <h1 className="title">{props.title}</h1>
      <h2 className="author">{props.author}</h2>

      <Link to={`books/${props.id}`}>
        <div className="photo">
          <img src={props.photo} alt={props.title} />
        </div>
      </Link>
      <h3 className="price">{props.price} $</h3>
      <p>{props.description}</p>
      <div className="actions">
        <button
          onClick={() => {
            addHandler(props);
          }}
        >
          {!isFavorite ? "Add to favorite" : "Remove from favorites"}
        </button>
        <button onClick={() => addToCartHandler(props)}>
          {!isInNewCart ? "Add to cart" : "Delete from cart"}
        </button>
        <button onClick={() => deleteHandler(props.id)}>Delete</button>
      </div>
    </section>
  );
};
export default BookItem;
