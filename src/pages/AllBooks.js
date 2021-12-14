import { useEffect, useState } from "react";
import LoadingIndicator from "../UI/LoadingIndicator";
import ErrorModal from "../UI/ErrorModal";
import BooksList from "../components/Books/BooksList";

const AllBooks = () => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [loadedBooks, setLoadedBooks] = useState([]);

  // useEffect(() => {
  //   setIsLoading(true);
  //   try {
  //     fetch(
  //       "https://react-app-81b61-default-rtdb.europe-west1.firebasedatabase.app/books.json"
  //     )
  //       .then((response) => response.json())
  //       .then((result) => {
  //         const allBooks = [];

  //         for (const key in result) {
  //           const newBook = {
  //             id: key,
  //             ...result[key],
  //           };
  //           allBooks.push(newBook);
  //         }
  //         console.log(allBooks);
  //       });
  //   } catch (error) {
  //     setIsLoading(false);
  //     setError(error);
  //   }
  // }, []);

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
      })
      .catch((error) => {
        setError("Something went wrong");
      });
  }, []);

  const closeErrorModalHandler = () => {
    setIsLoading(false);
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal onClose={closeErrorModalHandler}>{error}</ErrorModal>
      )}
      <h1>All books</h1>
      {isLoading && <LoadingIndicator />}
      <BooksList allBooks={loadedBooks} />
    </div>
  );
};

export default AllBooks;
