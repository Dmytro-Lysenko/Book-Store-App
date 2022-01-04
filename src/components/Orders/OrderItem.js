import classes from "./OrderItem.module.css";
const OrderItem = (props) => {
  // const random = Number(Math.random().toString().substring(4));
  const newOrder = props.book;
  // const k = props.book.slice(1);
  // console.log(k);
  const price = newOrder.slice(-1);
  const fireBaseKey = newOrder.shift();
  // console.log(fireBaseKey);
  const x = newOrder.length - 2;
  const key = newOrder[x];

  // const key = props.book.slice(-1);
  const deletehandler = (firebaseKey, key) => {
    props.Onclose(firebaseKey, key);
  };

  return (
    <section className={classes.container} key={fireBaseKey}>
      <h2 className={classes.orderNumber}>Order: {fireBaseKey}</h2>
      {props.book.map((order) => (
        <div className={classes.order}  >
          <h2 className={classes.title}>{order.title}</h2>
          <h2 className={classes.pcs}>{order.pcs}</h2>
          <h2 className={classes.price}>{order.totalPrice}</h2>
        </div>
      ))}
      <h3 className={classes.totalPrice}>Total: {price}</h3>
      <div className={classes.delete}>
        <button onClick={() => deletehandler(fireBaseKey, key)}>
          Delete order
        </button>
      </div>
    </section>
  );
};

export default OrderItem;
