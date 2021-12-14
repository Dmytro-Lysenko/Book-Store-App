import AddNewBookForm from "../components/AddNewBookForm";

const AddNewBook = () => {
  const onAddBookHandler = (bookTitle, bookAuthor, bookPrice, bookPhoto) => {
    console.log(bookTitle, bookAuthor, bookPrice, bookPhoto);

    const NewBook = {
      title: bookTitle,
      author: bookAuthor,
      price: bookPrice,
      photo: bookPhoto,
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
    <div>
      <h1>Add new book</h1>
      <AddNewBookForm onAddBook={onAddBookHandler} />
    </div>
  );
};

export default AddNewBook;
