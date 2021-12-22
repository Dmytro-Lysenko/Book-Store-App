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

  allBooksCtx.allBooks = allBooks;

  return (
    <div>
      {error && (
        <ErrorModal onClose={closeErrorModalHandler}>{error}</ErrorModal>
      )}
      <h1 style={{ textAlign: "center", padding: "2rem" }}>All books</h1>
      {isLoading && <LoadingIndicator />}
      <BooksList allBooks={loadedBooks} />
    </div>
  );
};

export default AllBooks;
