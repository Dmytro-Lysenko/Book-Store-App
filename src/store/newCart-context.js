import { createContext, useState } from "react";

const NewCartContext = createContext({
  booksInCart: [],
  totalBooksInCart: 0,
  totalPriceOfBooks: 0,
  addBook: (book) => {},
  increaseBook: (bookId, newBook) => {},
  decreaseBook: (bookId, newBook) => {},
  deleteBook: (bookId) => {},
});

export const NewCartContextProvider = (props) => {
  const [booksInCart, setBooksInCart] = useState([]);
  const [totalCartPrices, setTotalCartPrices] = useState([]);
  const tPrices = booksInCart.map((book) => book.totalPrice);

  // console.log(tPrices.reduce((a, b) => a + b, 0));

  console.log(booksInCart);
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
  // console.log(totalPrices);

  const increaseBookHandler = (bookId, newBook) => {
    if (booksInCart.map((book) => book.id === bookId)) {
      const newBook = booksInCart.filter((book) => book.id === bookId);
      // console.log((newBook[0].pcs = newBook[0].pcs - 1));

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
      // console.log((newBook[0].pcs = newBook[0].pcs - 1));

      const updNewBook = {
        pcs: (newBook[0].pcs = newBook[0].pcs - 1),
        totalPrice: (newBook[0].totalPrice = newBook[0].pcs * newBook[0].price),
        ...newBook[0],
      };
      // test.push(updNewBook.totalPrice)
      // console.log(test);

      setTotalCartPrices(updNewBook.totalPrice);
      // console.log(newBook[0].totalPrice, newBook[0].price, updPrice);
      // console.log(updNewBook);

      booksInCart.filter((book) => book.id !== bookId);
      booksInCart.concat(updNewBook);
      // console.log(booksInCart);

      // const totalCartPrices = booksInCart.map(book => book.totalPrice)
      // console.log(totalCartPrices);
      // console.log(booksInCart);
      // return {
      //   pcs: newBook[0].pcs - 1,
      //   newBook,
      // };
    }
    // if(booksInCart.filter(book => book.id === bookId)) {
    //   console.log('ckikded');
    //   console.log(booksInCart[0]);
    // }
  };

  const increasePriceOfBookHamdler = (bookId) => {};

  const context = {
    booksInCart: booksInCart,
    totalBooksInCart: booksInCart.length,
    totalPriceOfBooks: tPrices.reduce((a, b) => a + b, 0),
    addBook: addHandler,
    increaseBook: increaseBookHandler,
    decreaseBook: decreaseBookHandler,
    deleteBook: deleteHandler,
  };

  return (
    <NewCartContext.Provider value={context}>
      {props.children}
    </NewCartContext.Provider>
  );
};

export default NewCartContext;
