import "./BookItem.css";
import FavoritesContext from "../../store/favorites-context";
import { useContext } from "react";
import { Link } from "react-router-dom";

const BookItem = (props) => {
  const favoritesCtx = useContext(FavoritesContext);

  const addHandler = (bookId) => {
    console.log(bookId);
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
            addHandler(props.id);
          }}
        >
          Add to favorites
        </button>
        <button>Add to cart</button>
      </div>
    </section>
  );
};
export default BookItem;
