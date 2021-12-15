import { useContext } from "react";
import { useParams } from "react-router-dom";
import AllBooksContext from "../../store/allBooks-context";
import BookItem from "./BookItem";

const Book = (props) => {
  const params = useParams();
  const alllBooksCtx = useContext(AllBooksContext);
  console.log("this is BOOK", alllBooksCtx.allBooks, alllBooksCtx);

  if (!alllBooksCtx.allBooks) {
    return (
      <h1 style={{ textAlign: "center", padding: "2rem" }}>
        There are no books
      </h1>
    );
  }

  const bookData = alllBooksCtx.allBooks.find(
    (book) => book.id === params.bookId
  );


  return (
    <div style={{ display: "flex", padding: "3rem", justifyContent: "center" }}>
      <BookItem
        title={bookData.title}
        author={bookData.author}
        price={bookData.price}
        photo={bookData.photo}
      
      />
    </div>
  );
};
export default Book;
