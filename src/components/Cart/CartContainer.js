import CartItemsList from "./CartItemsList";

const CartContainer = (props) => {
  return (
    <div>
      <div>
        <h1 style={{ color: "blue", textAlign: "center", padding: "2rem" }}>
          Cart Items
        </h1>
        <CartItemsList cartBooks={props.cartBook} />
      </div>
    </div>
  );
};
export default CartContainer;
