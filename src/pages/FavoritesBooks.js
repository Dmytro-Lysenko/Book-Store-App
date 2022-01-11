import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import BooksList from "../components/Books/BooksList";
import { CartContext } from "../App";

const FavoritesBooks = () => {
  const favoriteCtx = useContext(FavoritesContext);
  const cartCtx = useContext(CartContext);


  return (
    <div style={{ backgroundColor: "#c0e1d6", minHeight: "100vh" }}>
      {favoriteCtx.totalFavoriteBooks === 0 && (
        <h1 style={{ color: "blue", textAlign: "center", padding: "2rem" }}>
          There is no favorites books
        </h1>
      )}
      <BooksList
        allBooks={
          cartCtx.cartValue[0]
            ? cartCtx.cartValue[0]
            : favoriteCtx.favoriteBooks
        }
      />
    </div>
  );
};
export default FavoritesBooks;
