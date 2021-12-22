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

  const setHandler = (price) => {
    setPrices((prevPrice) => {
      return prevPrice.concat(price);
    });
  };

  const decreaseHandler = (priceM) => {
    setPrices((prevPrices) => {
      return (prevPrices = prices.splice(0, prices.length, ...priceM));
    });
  };

  const context = {
    prices: prices,
    totalPrices: prices.reduce((a, b) => a + b, 0),
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
