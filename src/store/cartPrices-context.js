import { createContext, useState } from "react";

const CartPricesContext = createContext({
  prices: [],
  totalPrices: 0,
  addtoPrices: (price) => {},
  deleteFromPrices: (price) => {},
  setTotalPrice: (price) => {},
});

export const CartPricesContextProvider = (props) => {
  const [prices, setPrices] = useState([]);
  //   const [totalCartPrices, setTotalCartPrices] = useState();

  const setHandler = (price) => {
    setPrices((prevPrice) => {
      return prevPrice.concat(price);
    });
    console.log(prices);
  };

  //   const addHandler = (price) => {
  //     function removeSmallest(arr) {
  //       var max = Math.max(...arr);
  //       return arr.filter((e) => e === max);
  //     }

  //     setPrices((prevPrices) => {
  //       console.log("this is log from price context", price);
  //       const updArr = [...prevPrices, price];
  //       return removeSmallest(updArr);
  //     });

  //     setTotalCartPrices(prices);
  //   };

  //   const addInArray = (price) => {
  //     setPrices((prevPrice) => {
  //       return prevPrice.concat(price);
  //     });
  //   };

  const decreaseHandler = (priceM) => {
    setPrices((prevPrices) => {
      return (prevPrices = prices.splice(0, prices.length, ...priceM));
    });

    console.log("clicked");
  };

  console.log("Prices from context", prices);
  const context = {
    prices: prices,
    totalPrices: prices.reduce((a, b) => a + b, 0),
    // addtoPrices: addHandler,
    // addInarr: addInArray,
    decreasePrices: decreaseHandler,
    setTotalPrice: setHandler,
  };

  return (
    <CartPricesContext.Provider value={context}>
      {props.children}
    </CartPricesContext.Provider>
  );
};

export default CartPricesContext;
