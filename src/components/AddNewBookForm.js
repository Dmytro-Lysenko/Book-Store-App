import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import './AddNewBookForm.css'

const AddNewBookForm = (props) => {
  let navigate = useNavigate();
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
    navigate("/", { replace: true });
  };

  const nameChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  
  };
  const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };
  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  };
  const photoChangeHandler = (event) => {
    setEnteredPhoto(event.target.value);
  };

  return (
    <form className="form" onSubmit={SubmitHandler}>
      <div className="control">
        <label htmlFor="title">Title</label>
        <input
          value={enteredTitle}
          type="text"
          id="title"
          ref={inputTitle}
          onChange={nameChangeHandler}
        />
      </div>
      <div className="control" >
        <label htmlFor="author">Author</label>
        <input
          value={enteredAuthor}
          type="text"
          id="author"
          ref={inputAuthor}
          onChange={authorChangeHandler}
        />
      </div>
      <div className="control" >
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
      <div className="control" >
        <label htmlFor="photo">Photo</label>
        <input
          value={enteredPhoto}
          type="url"
          id="photo"
          ref={inputPhoto}
          onChange={photoChangeHandler}
        />
      </div>
      <div className="action">
      <button type="submit">Add book</button>
      </div>
    </form>
  );
};
export default AddNewBookForm;
