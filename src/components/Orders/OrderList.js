import OrderItem from "./OrderItem";

const OrderList = (props) => {
  if (!props.value) {
    return <h1>No orders</h1>;
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
          <OrderItem
            // title={book.title}
            // pcs={book.pcs}
            // price={book.totalPrice}
            // key={book.id}
            // totPrice={totPrice}
            book={book}
          />
        ))}
      </section>
    </div>
  );
};

export default OrderList;
