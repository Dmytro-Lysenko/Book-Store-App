import { createContext, useState } from "react";

const AllBooksContext = createContext({
  allBooks: [],
  totalBooks: 0,
  deleteBook: (bookId) => {},
});

export const AllBooksContextProvider = (props) => {
  const [allbooks, setAllBooks] = useState([]);

  const deleteHandler = (bookId) => {
    setAllBooks((prevBooks) => {
      return prevBooks.filter((book) => book.id !== bookId);
    });
  };

  const context = {
    allbooks: allbooks,
    totalBooks: allbooks.length,
    deleteBook: deleteHandler,
  };

  return (
    <AllBooksContext.Provider value={context}>
      {props.children}
    </AllBooksContext.Provider>
  );
};

export default AllBooksContext;
