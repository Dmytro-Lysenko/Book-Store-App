import BookItem from "./BookItem";

const BooksList = (props) => {
  if (!props.allBooks) {
    return <h1>NoALlbiiks</h1>;
  }
  //   const test = (event, e, r, t, y, u) => {
  //     event.preventDefault();
  //     console.log(e, r, t, y, u);
  //     props.onLiClick(e, r, t, y, u);
  //   };

  // to={`/books/${book.title.split(" ").join("-")}`

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
