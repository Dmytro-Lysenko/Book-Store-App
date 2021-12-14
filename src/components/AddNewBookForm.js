import { useState, useRef } from "react";

const AddNewBookForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredPhoto, setEnteredPhoto] = useState("");

  const inputTitle = useRef();
  const inputAuthor = useRef();
  const inputPrice = useRef();
  const inputPhoto = useRef();

  const SubmitHandler = (event) => {
    event.preventDefault();
    props.onAddBook(enteredTitle, enteredAuthor, enteredPrice, enteredPhoto);
    setEnteredTitle("");
    setEnteredAuthor("");
    setEnteredPrice("");
    setEnteredPhoto("");
  };

  const nameChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    console.log(enteredTitle);
  };
  const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value);
    console.log(enteredAuthor);
  };
  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
    console.log(enteredPrice);
  };
  const photoChangeHandler = (event) => {
    setEnteredPhoto(event.target.value);
    console.log(enteredPhoto);
  };

  return (
    <form onSubmit={SubmitHandler}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          value={enteredTitle}
          type="text"
          id="title"
          ref={inputTitle}
          onChange={nameChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <input
          value={enteredAuthor}
          type="text"
          id="author"
          ref={inputAuthor}
          onChange={authorChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input
          value={enteredPrice}
          type="number"
          id="price"
          ref={inputPrice}
          step="0.01"
          onChange={priceChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="photo">Photo</label>
        <input
          value={enteredPhoto}
          type="url"
          id="photo"
          ref={inputPhoto}
          onChange={photoChangeHandler}
        />
      </div>
      <button type="submit">Add book</button>
    </form>
  );
};
export default AddNewBookForm;
