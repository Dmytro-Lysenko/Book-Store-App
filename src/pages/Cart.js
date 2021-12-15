import { useContext } from "react";
import { CartContext } from "../App";
import BooksList from "../components/Books/BooksList";

const AddNewBook = () => {
  const cartCtx = useContext(CartContext);
  return (
    <div>
      <BooksList allBooks={cartCtx.cartValue} />
    </div>
  );
};

export default AddNewBook;
