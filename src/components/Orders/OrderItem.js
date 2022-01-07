import OrderBook from "./OrderBook";
import classes from "./OrderItem.module.css";
const OrderItem = (props) => {
  const firebaseKey = props.book[Object.keys(props.book).length - 2];
  const deletehandler = (firebaseKey) => {
    props.Onclose(firebaseKey);
  };

  const checker = (book) => {
    if (book.id) {
      return <OrderBook book={book} key={book.id} />;
    }
  };

  return (
    <section className={classes.container}>
      <h2 className={classes.orderNumber}>
        Order: {props.book[Object.keys(props.book).length - 2]}
      </h2>
      {props.book.map((book) => checker(book))}
      <h3 className={classes.totalPrice}>
        Total: {props.book[Object.keys(props.book).length - 1]}
      </h3>
      <div className={classes.delete}>
        <button onClick={() => deletehandler(firebaseKey)}>Delete order</button>
      </div>
    </section>
  );
};

export default OrderItem;
