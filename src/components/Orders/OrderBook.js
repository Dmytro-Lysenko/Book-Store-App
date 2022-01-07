import classes from "./OrderItem.module.css";

const OrderBook = (props) => {
  return (
    <div className={classes.order}>
      <h2 className={classes.title}>{props.book.title}</h2>
      <h2 className={classes.pcs}>{props.book.pcs}</h2>
      <h2 className={classes.price}>{props.book.totalPrice}</h2>
    </div>
  );
};

export default OrderBook;
