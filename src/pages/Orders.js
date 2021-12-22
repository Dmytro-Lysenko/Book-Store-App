import { useEffect, useState } from "react";
import OrderList from "../components/Orders/OrderList";

const Orders = () => {
  const [loadedOrders, setLoadedOrders] = useState([]);

  const orders = [];
  useEffect(() => {
    // setIsLoading(true);
    fetch(
      "https://react-app-81b61-default-rtdb.europe-west1.firebasedatabase.app/cart-orders.json"
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        const updResult = Object.values(result);
        console.log(updResult);

        const orders = [];
        const totPrices = [];
        for (let i = 0; i < updResult.length; i++) {
          //  const uy  = Object.values(result[key]);
          //  console.log(uy);
          console.log(updResult[i]);
          const td = Object.values(updResult[i])
          console.log(td);
          orders.push(td)
          console.log(orders);

          ////////////
          // console.log(result[key][0]);
        //   for (let i = 0; i < updResult.length; i++) {
        //     console.log(result.length);
        //     // console.log(result[key]);
        //   }

        //   console.log(y, i, r);
        //   // console.log(result[key]);
        //   const array = [];
        //   array.push(result[key]);
        //   orders.push(array);

        ///////
        }
        setLoadedOrders(orders);
        // console.log(loadedOrders);
        // setIsLoading(false);
        // const allBooks = [];

        // for (const key in result) {
        //   const newBook = {
        //     id: key,
        //     ...result[key],
        //   };
        //   allBooks.push(newBook);
        // }

        // setLoadedBooks(allBooks);
        // setAllBooks((prev) => {
        //   return (prev = allBooks);
        // });
      })
      .catch((error) => {
        // setError("Something went wrong");
      });
  }, []);
  console.log(loadedOrders);
  return (
    <div>
      <section>
        <h2>Orders</h2>
        <OrderList value={loadedOrders} />
      </section>
    </div>
  );
};

export default Orders;
