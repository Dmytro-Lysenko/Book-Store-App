import BookItem from "./BookItem";

const BooksList = (props) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <h1>Book list</h1>
      {props.allBooks.map((book) => (
        <BookItem
          key={book.id}
          title={book.title}
          author={book.author}
          price={book.price}
          photo={book.photo}
        />
      ))}
    </div>
  );
};
export default BooksList;
