
import CartItemsList from "./CartItemsList";

const CartContainer = (props) => {
   
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
