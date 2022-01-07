import { useEffect, useState } from "react";
import OrderList from "../components/Orders/OrderList";
import ErrorModal from "../UI/ErrorModal";
import LoadingIndicator from "../UI/LoadingIndicator";

const Orders = () => {
  const [loadedOrders, setLoadedOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const getOrders = () => {
    fetch(
      "https://react-app-81b61-default-rtdb.europe-west1.firebasedatabase.app/cart-orders.json"
    )
      .then((response) => response.json())
      .then((result) => {


        let ordersWithKeys = [];

        for (const prop in result) {
          result[prop].key = prop;
          ordersWithKeys.push(Object.values(result[prop]));
        }
        setIsLoading(false);

        setLoadedOrders((prevorders) => {
          return (prevorders = ordersWithKeys);
        });
      })
      .catch((error) => {
        setError("Something went wrong");
      });
  };

  useEffect(() => {
    setIsLoading(true);
    getOrders();
  }, []);

  const closeErrorModalHandler = () => {
    setIsLoading(false);
    setError(null);
  };

  const deleteOrderHandler = (firebaseKey) => {
   

    fetch(
      `https://react-app-81b61-default-rtdb.europe-west1.firebasedatabase.app/cart-orders/${firebaseKey}.json`,
      {
        method: "DELETE",
      }
    ).then(() => {
      getOrders();
    });

    
  };

  
  return (
    <div style={{ backgroundColor: "#c0e1d6", minHeight: "100vh" }}>
      {loadedOrders.length === 0 ? (
        <h1 style={{ color: "blue", textAlign: "center", padding: "2rem" }}>
          There is no ordered books
        </h1>
      ) : (
        <OrderList value={loadedOrders} OnDelete={deleteOrderHandler} />
      )}
      <section>
        {error && (
          <ErrorModal onClose={closeErrorModalHandler}>{error}</ErrorModal>
        )}
        {isLoading && <LoadingIndicator />}
      </section>
    </div>
  );
};

export default Orders;
