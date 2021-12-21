import CartBookItem from "./CartBookItem";

const CartItemsList = (props) => {
 
  // console.log("This is cartList item", props);
  // console.log("This is cartList item", props.cartBooks);
  return (
    <div>
      {props.cartBooks.map((book) => (
        <CartBookItem
          key={book.id}
          title={book.title}
          author={book.author}
          price={+book.price}
          photo={book.photo}
          id={book.id}
          pcs={book.pcs}
          totalPrice={+book.totalPrice}
        />
      ))}
    </div>
  );
};

export default CartItemsList;
