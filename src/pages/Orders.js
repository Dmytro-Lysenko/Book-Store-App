import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import OrderList from "../components/Orders/OrderList";

const Orders = () => {
  let navigate = useNavigate();
  const [loadedOrders, setLoadedOrders] = useState([]);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    // setIsLoading(true);
    fetch(
      "https://react-app-81b61-default-rtdb.europe-west1.firebasedatabase.app/cart-orders.json"
    )
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        const updResult = Object.values(result);
        const key = Object.keys(result);
        // console.log(updResult);
        // console.log(key);

        const orders = [];
        for (let i = 0; i < updResult.length; i++) {
          // console.log(updResult[i]);
          const resultsInArray = Object.values(updResult[i]);
          const y = [key[i], ...resultsInArray];
          // console.log(y);
          orders.push(y);
        }
        console.log(orders);
        setLoadedOrders((prevorders) => {
          return (prevorders = orders);
        });
      })
      .catch((error) => {
        // setError("Something went wrong");
      });
  }, []);
  console.log("This is loadedOrders", loadedOrders);

  const deleteOrderHandler = (firebaseKey, key) => {
    console.log("clicked", firebaseKey, key);
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
        <OrderList value={loadedOrders} OnDelete={deleteOrderHandler} />
      </section>
    </div>
  );
};

export default Orders;
