import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import BooksList from "../components/Books/BooksList";

const FavoritesBooks = () => {
  const favoriteCtx = useContext(FavoritesContext);
  return (
    <div>
      {favoriteCtx.totalFavoriteBooks === 0 && (
        <h1>There is no favorites books</h1>
      )}
      <BooksList allBooks={favoriteCtx.favoriteBooks} />
      <div>
        {favoriteCtx.totalFavoriteBooks === 0 ? (
          " "
        ) : (
          <button>Add all favorites to cart</button>
        )}
      </div>
    </div>
  );
};
export default FavoritesBooks;
