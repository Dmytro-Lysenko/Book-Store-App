import { createContext, useState } from "react";

const NewCartContext = createContext({
  booksInCart: [],
  totalBooksInCart: 0,
  totalPriceOfBooks: 0,
  addBook: (book) => {},
  increaseBook: (bookId, newBook) => {},
  decreaseBook: (bookId, newBook) => {},
  deleteBook: (bookId) => {},
  clearCart: () => {},
  setBooksInCart: (books) => {},
});

export const NewCartContextProvider = (props) => {
  const [booksInCart, setBooksInCart] = useState([]);
  const [totalCartPrices, setTotalCartPrices] = useState([]);
  const tPrices = booksInCart.map((book) => book.totalPrice);


  const addHandler = (book) => {
    setBooksInCart((prevBooks) => {
      return [book, ...prevBooks];
    });
  };

  const deleteHandler = (bookId) => {
    setBooksInCart((prevBooks) => {
      return prevBooks.filter((book) => book.id !== bookId);
    });
  };
  const totalPrices = [];

  const totalPrice = booksInCart.map((book) => book.totalPrice);
  totalPrices.push(totalPrice);

  const increaseBookHandler = (bookId, newBook) => {
    if (booksInCart.map((book) => book.id === bookId)) {
      const newBook = booksInCart.filter((book) => book.id === bookId);

      const updNewBook = {
        pcs: (newBook[0].pcs = newBook[0].pcs + 1),
        totalPrice: (newBook[0].totalPrice = newBook[0].pcs * newBook[0].price),
        ...newBook[0],
      };
      setTotalCartPrices(updNewBook.totalPrice);

      booksInCart.filter((book) => book.id !== bookId);
      booksInCart.concat(updNewBook);
    }
  };

  const decreaseBookHandler = (bookId, newBook) => {
    if (booksInCart.map((book) => book.id === bookId)) {
      const newBook = booksInCart.filter((book) => book.id === bookId);

      const updNewBook = {
        pcs: (newBook[0].pcs = newBook[0].pcs - 1),
        totalPrice: (newBook[0].totalPrice = newBook[0].pcs * newBook[0].price),
        ...newBook[0],
      };

      setTotalCartPrices(updNewBook.totalPrice);

      booksInCart.filter((book) => book.id !== bookId);
      booksInCart.concat(updNewBook);
    }
  };
  const clearCartHandler = () => {
    return setBooksInCart([]);
  };
  // const increasePriceOfBookHamdler = (bookId) => {};

  const setBooksInCartHandler = (books) => {
    setBooksInCart((prev) => {
      return (prev = books);
    });
  };

  const context = {
    booksInCart: booksInCart,
    totalBooksInCart: booksInCart.length,
    totalPriceOfBooks: tPrices.reduce((a, b) => a + b, 0),
    addBook: addHandler,
    increaseBook: increaseBookHandler,
    decreaseBook: decreaseBookHandler,
    deleteBook: deleteHandler,
    clearCart: clearCartHandler,
    setBooksInCart: setBooksInCartHandler,
  };

  return (
    <NewCartContext.Provider value={context}>
      {props.children}
    </NewCartContext.Provider>
  );
};

export default NewCartContext;
