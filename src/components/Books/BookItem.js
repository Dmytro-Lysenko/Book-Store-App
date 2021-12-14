import "./BookItem.css";

const BookItem = (props) => {
  return (
    <section className="section">
      <h1 className="title">{props.title}</h1>
      <h2 className="author">{props.author}</h2>

      <div className="photo">
        <img src={props.photo} alt={props.title} />
      </div>
      <h3 className="price">{props.price} $</h3>
      <div className="actions">
        <button>Add to favorites</button>
        <button>Add to cart</button>
      </div>
    </section>
  );
};
export default BookItem;
