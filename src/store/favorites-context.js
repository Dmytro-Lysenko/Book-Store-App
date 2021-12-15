import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favoriteBooks: [],
  totalFavoriteBooks: 0,
  addtoFavoriteBook: (book) => {},
  deleteFromFavoriteBook: (bookId) => {},
});

export const FavoritesContextProvider = (props) => {
  const [favoritesBooks, setFavoritesBooks] = useState([]);

  const addHandler = (book) => {
    setFavoritesBooks((prevBooks) => {
      return [...prevBooks, book];
    });
  };

  const deleteHandler = (bookId) => {
    setFavoritesBooks((prevBooks) => {
      return prevBooks.filter((book) => book.id !== bookId);
    });
  };

  const context = {
    favoriteBooks: favoritesBooks,
    totalFavoriteBooks: favoritesBooks.length,
    addtoFavoriteBook: addHandler,
    deleteFromFavoriteBook: deleteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
