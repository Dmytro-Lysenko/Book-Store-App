import OrderItem from "./OrderItem";
import { useState } from "react";

const OrderList = (props) => {
  console.log(props.value);
  console.log(props.value.map((value) => value));
  // const ty = props.value.map((value) => value[0]);
  // console.log(props.value.map((value) => value[0]));
  // console.log(ty.map((value) => value.author));
  // const [order, setOrder] = useState([]);
  // console.log(props.value.map((value) => value));
  // let test;
  // let totPrice;
  // for (let i = 0; i < props.value.length; i++) {
  //   console.log(props.value.length);
  //   console.log(props.value[i]);
  //   test = props.value[i];

  //   totPrice = test.pop();

  //   console.log("This is test", test);
  //   console.log(test.map((book) => book));
  //   // console.log(totPrice);
  // }
  // setOrder((prev) => {
  //   return (prev = test);
  // });

  // yut.push(r[0])
  // console.log(yut);
  // console.log(props.value.map((book) => book[0].title));
  if (!props.value) {
    return <h1>No orders</h1>;
  }

  return (
    <div>
      <section>
        <h2>OrderList</h2>
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
