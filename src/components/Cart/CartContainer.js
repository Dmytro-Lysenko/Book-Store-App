
import CartItemsList from "./CartItemsList";

const CartContainer = (props) => {
    console.log("This is cartContainer item", props);
    console.log("This is cartLContienr item", props.cartBook);
  return (
    <div>
      <div>
        cartitems
        <CartItemsList cartBooks={props.cartBook} />
      </div>
    </div>
  );
};
export default CartContainer;
