import classes from "./OrderItem.module.css";
const OrderItem = (props) => {
  // console.log(props.book);
  // console.log(props.book[0].length);
  // console.log(props.book.map((order) => order));
  // console.log(props.book.map((order) => order[0]));
  // let counter = 1;
  const random = Number(Math.random().toString().substring(4));
  return (
    <section className={classes.container}>
      <h2 className={classes.orderNumber}>Order {random}</h2>
      {props.book.map((order) => (
        <div className={classes.order} key={order.id}>
          <h2 className={classes.title}>{order.title}</h2>
          <h2 className={classes.pcs}>{order.pcs}</h2>
          <h2 className={classes.price}>{order.totalPrice}</h2>
        </div>
      ))}
      <h3 className={classes.totalPrice}>Total: {props.book.slice(-1)}</h3>
    </section>
  );
};

export default OrderItem;
