import { useEffect, useState } from "react";
import OrderList from "../components/Orders/OrderList";

const Orders = () => {
  const [loadedOrders, setLoadedOrders] = useState([]);

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
        for (let i = 0; i < updResult.length; i++) {
          console.log(updResult[i]);
          const resultsInArray = Object.values(updResult[i]);
          orders.push(resultsInArray);
        }
        setLoadedOrders(orders);
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
