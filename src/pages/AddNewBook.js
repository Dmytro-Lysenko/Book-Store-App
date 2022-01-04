import AddNewBookForm from "../components/AddNewBookForm";

const AddNewBook = () => {
  const onAddBookHandler = (bookTitle, bookAuthor, bookPrice, bookPhoto) => {

    const NewBook = {
      title: bookTitle,
      author: bookAuthor,
      price: bookPrice,
      photo: bookPhoto,
      pcs: 1,
      totalPrice: bookPrice,
    };

    fetch(
      "https://react-app-81b61-default-rtdb.europe-west1.firebasedatabase.app/books.json",
      {
        method: "POST",
        body: JSON.stringify(NewBook),
      }
    ).catch((err) => {
      console.error(err);
    });
  };

  return (
    <div style={{ backgroundColor: "#c0e1d6", height: "100vh" }} >
      <h1 style={{ color: "blue", textAlign: "center", padding: "2rem" }}>
        Add new book
      </h1>
      <AddNewBookForm onAddBook={onAddBookHandler} />
    </div>
  );
};

export default AddNewBook;
