import classes from "./OrderItem.module.css";
const OrderItem = (props) => {
  // const random = Number(Math.random().toString().substring(4));
  // const newOrder = props.book;
  // const k = props.book.slice(1);
  // console.log(k);
  // const price = newOrder.slice(-1);
  // const fireBaseKey = newOrder.shift();
  // const x = newOrder.length - 2;
  // const key = newOrder[x];
  // const key = props.book.slice(-1);
  const firebaseKey = props.book[Object.keys(props.book).length - 2];
  const deletehandler = (firebaseKey) => {
    props.Onclose(firebaseKey);
  };

  return (
    <section className={classes.container}>
      <h2 className={classes.orderNumber}>Order: {props.book[Object.keys(props.book).length - 2]}</h2>
      {props.book.map((order) => (
        <div className={classes.order} key={order.id}>
          <h2 className={classes.title}>{order.title}</h2>
          <h2 className={classes.pcs}>{order.pcs}</h2>
          <h2 className={classes.price}>{order.totalPrice}</h2>
        </div>
      ))}
      <h3 className={classes.totalPrice}>Total: {props.book[Object.keys(props.book).length - 1]}</h3>
      <div className={classes.delete}>
        <button onClick={() => deletehandler(firebaseKey)}>
          Delete order
        </button>
      </div>
    </section>
  );
};

export default OrderItem;
