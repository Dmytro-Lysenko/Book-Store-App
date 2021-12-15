import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import BooksList from "../components/Books/BooksList";
import { CartContext } from "../App";

const FavoritesBooks = () => {
  const favoriteCtx = useContext(FavoritesContext);
  const cartCtx = useContext(CartContext);

  
  const addAllToCartHandler = () => {
    cartCtx.cartDispatch({
      type: "ADDALL",
      book: favoriteCtx.favoriteBooks,
    });
    
   
  };
  return (
    <div>
      {favoriteCtx.totalFavoriteBooks === 0 && (
        <h1>There is no favorites books</h1>
      )}
      <BooksList
        allBooks={
          cartCtx.cartValue[0]
            ? cartCtx.cartValue[0]
            : favoriteCtx.favoriteBooks
        }
      />
      <div>
        {favoriteCtx.totalFavoriteBooks === 0 ? (
          " "
        ) : (
          <button onClick={addAllToCartHandler}>
            Add all favorites to cart
          </button>
        )}
      </div>
    </div>
  );
};
export default FavoritesBooks;
