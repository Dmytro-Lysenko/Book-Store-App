import OrderItem from "./OrderItem";

const OrderList = (props) => {
  if (!props.value) {
    return <h1>No orders</h1>;
  }

  const deleteOrderHandler = (firebaseKey,key)=> {
    props.OnDelete(firebaseKey,key)
  }

  return (
    <div>
      <section>
        <h2
          style={{
            color: "blue",
            textAlign: "center",
            padding: "2rem",
            fontSize: "2rem",
          }}
        >
          OrderList
        </h2>
        {props.value.map((book) => (
          <OrderItem Onclose={deleteOrderHandler}
            // title={book.title}
            // pcs={book.pcs}
            // price={book.totalPrice}
            // key={book.id}
            // totPrice={totPrice}
            key={book.id}
            book={book}
          />
        ))}
      </section>
    </div>
  );
};

export default OrderList;
