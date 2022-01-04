import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import OrderList from "../components/Orders/OrderList";
import ErrorModal from "../UI/ErrorModal";
import LoadingIndicator from "../UI/LoadingIndicator";

const Orders = () => {
  let navigate = useNavigate();
  const [loadedOrders, setLoadedOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-app-81b61-default-rtdb.europe-west1.firebasedatabase.app/cart-orders.json"
    )
      .then((response) => response.json())
      .then((result) => {
        const updResult = Object.values(result);
        const key = Object.keys(result);

        const orders = [];
        for (let i = 0; i < updResult.length; i++) {
          // console.log(updResult[i]);
          const resultsInArray = Object.values(updResult[i]);
          const y = [key[i], ...resultsInArray];
          // console.log(y);
          orders.push(y);
          setIsLoading(false);
        }
        setLoadedOrders((prevorders) => {
          return (prevorders = orders);
        });
      })
      .catch((error) => {
        setError("Something went wrong");
      });
  }, []);

  const closeErrorModalHandler = () => {
    setIsLoading(false);
    setError(null);
  };

  const deleteOrderHandler = (firebaseKey, key) => {
    // console.log(loadedOrders);

    // const test = loadedOrders.filter((order) => order[3] !== key);
    // console.log(loadedOrders.filter((order) => order[3] !== key));
    // console.log(test);

    fetch(
      `https://react-app-81b61-default-rtdb.europe-west1.firebasedatabase.app/cart-orders/${firebaseKey}.json`,
      {
        method: "DELETE",
      }
    ).then(() => {
      navigate("/", { replace: true });
    });

    /////////////////
    // fetch(
    //   "https://react-app-81b61-default-rtdb.europe-west1.firebasedatabase.app/cart-orders.json"
    // )
    //   .then((response) => response.json())
    //   .then((result) => {
    //     // console.log(result);
    //     const updResult = Object.values(result);
    //     const key = Object.keys(result);
    //     // console.log(updResult);
    //     // console.log(key);

    //     const orders = [];
    //     for (let i = 0; i < updResult.length; i++) {
    //       // console.log(updResult[i]);
    //       const resultsInArray = Object.values(updResult[i]);
    //       const y = [key[i], ...resultsInArray];
    //       // console.log(y);
    //       orders.push(y);
    //     }
    //     console.log(orders);
    //     setOrder(orders);
    //     // setLoadedOrders((prevorders) => {
    //     //   return (prevorders = orders);
    //     // });
    //   })
    //   .catch((error) => {
    //     // setError("Something went wrong");
    //   });
    //////////
  };

  return (
    <div style={{ backgroundColor: "#c0e1d6", minHeight: "100vh" }}>
      <section>
        {error && (
          <ErrorModal onClose={closeErrorModalHandler}>{error}</ErrorModal>
        )}
        {isLoading && <LoadingIndicator />}
        <OrderList value={loadedOrders} OnDelete={deleteOrderHandler} />
      </section>
    </div>
  );
};

export default Orders;
