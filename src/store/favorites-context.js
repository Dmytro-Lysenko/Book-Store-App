import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favoriteBooks: [],
  totalFavoriteBooks: 0,
  addtoFavoriteBook: (book) => {},
  deleteFromFavoriteBook: (bookId) => {},
  isFavorite: (bookId) => {},
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

  const isFavoriteHandler = (bookId) => {
    return favoritesBooks.some((book) => book.id === bookId);
  };

  const context = {
    favoriteBooks: favoritesBooks,
    totalFavoriteBooks: favoritesBooks.length,
    addtoFavoriteBook: addHandler,
    deleteFromFavoriteBook: deleteHandler,
    isFavorite: isFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
