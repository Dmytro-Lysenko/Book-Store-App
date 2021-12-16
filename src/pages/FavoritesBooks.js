import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import BooksList from "../components/Books/BooksList";
import { CartContext } from "../App";

const FavoritesBooks = () => {
  const favoriteCtx = useContext(FavoritesContext);
  const cartCtx = useContext(CartContext);

  const t = [3, 21, 14, 44];
  const r = [1, 17, 8];

  t.splice(0, t.length, ...r);
  console.log(t.splice(0, t.length, ...r));

  // t.length = 0;                  // Clear contents
  // t.push.apply(Array1, Array2);

  console.log(t.splice(t.indexOf(14), 1));
  console.log(t);

  // console.log(t.reduce((a, b) => a + b, 0));

  // function removeSmallest(arr) {
  //   var max = Math.max(...arr);
  //   return arr.filter((e) => e === max);
  // }

  // console.log(t);
  // console.log(removeSmallest(t));

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
