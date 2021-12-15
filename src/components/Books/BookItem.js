import "./BookItem.css";
import FavoritesContext from "../../store/favorites-context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../App";

const BookItem = (props) => {
  const favoritesCtx = useContext(FavoritesContext);
  const cartCtx = useContext(CartContext);
  const isFavorite = favoritesCtx.isFavorite(props.id);
  const isInCart = cartCtx.cartValue.some((book) => book.id === props.id);
  console.log(isInCart);

  const addToCartHandler = (newBook) => {
    // cartCtx.cartDispatch({
    //   type: "ADD",
    //   book: newBook,
    // });

    // const isInCart = cartCtx.cartDispatch({ type: "ISINCART", id: newBook.id });
    if (isInCart) {
      cartCtx.cartDispatch({
        type: "DEL",
        id: newBook.id,
      });
    } else {
      cartCtx.cartDispatch({
        type: "ADD",
        book: newBook,
      });
    }

    // cartCtx.cartDispatch({
    //   type: "DEL",
    //   id: newBook.id,
    // });
  };

  // const delToCartHandler = (book) => {
  //   cartCtx.cartDispatch({
  //     type: "DEL",
  //     id: book.id,
  //   });
  // };

  const addHandler = (book) => {
    if (isFavorite) {
      favoritesCtx.deleteFromFavoriteBook(props.id);
    } else {
      favoritesCtx.addtoFavoriteBook(book);
      console.log(favoritesCtx.favoriteBooks);
    }
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
          {!isInCart ? "Add to cart" : "Delete from cart"}
        </button>
        {/* <button onClick={() => delToCartHandler(props)}>
          Delete from cart
        </button> */}
      </div>
    </section>
  );
};
export default BookItem;
