import BookItem from "./BookItem";

const BooksList = (props) => {

  if (!props.allBooks) {
    return <h1>NoALlbiiks</h1>;
  }
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {props.allBooks.map((book) => (
        <BookItem
          key={book.id}
          title={book.title}
          author={book.author}
          price={+book.price}
          photo={book.photo}
          id={book.id}
        />
      ))}
    </div>
  );
};
export default BooksList;
