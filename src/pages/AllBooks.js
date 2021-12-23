import { useContext, useEffect, useState } from "react";
import LoadingIndicator from "../UI/LoadingIndicator";
import ErrorModal from "../UI/ErrorModal";
import BooksList from "../components/Books/BooksList";
import AllBooksContext from "../store/allBooks-context";

const AllBooks = () => {
  const allBooksCtx = useContext(AllBooksContext);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [loadedBooks, setLoadedBooks] = useState([]);
  const [allBooks, setAllBooks] = useState(allBooksCtx.allBooks);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-app-81b61-default-rtdb.europe-west1.firebasedatabase.app/books.json"
    )
      .then((response) => response.json())
      .then((result) => {
        setIsLoading(false);
        const allBooks = [];

        for (const key in result) {
          const newBook = {
            id: key,
            ...result[key],
          };
          allBooks.push(newBook);
        }

        setLoadedBooks(allBooks);
        setAllBooks((prev) => {
          return (prev = allBooks);
        });
      })
      .catch((error) => {
        setError("Something went wrong");
      });
  }, []);

  const closeErrorModalHandler = () => {
    setIsLoading(false);
    setError(null);
  };

  const deleteBookHandler = (bookId) => {
    console.log(bookId);
    console.log("clicked");
    const updatedBooks = allBooksCtx.allBooks.filter((book) => book.id !== bookId);
    console.log(updatedBooks);
    setLoadedBooks(updatedBooks)
  };

  allBooksCtx.allBooks = loadedBooks;

  return (
    <div style={{ backgroundColor: "#c0e1d6", minHeight: "100vh" }}>
      {error && (
        <ErrorModal onClose={closeErrorModalHandler}>{error}</ErrorModal>
      )}
      <h1 style={{ color: "blue", textAlign: "center", padding: "2rem" }}>
        All books
      </h1>
      {isLoading && <LoadingIndicator />}
      <BooksList allBooks={loadedBooks} onDel={deleteBookHandler} />
    </div>
  );
};

export default AllBooks;
