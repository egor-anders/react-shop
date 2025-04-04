import ShopContext from "../context/ShopContext";
import CartItem from "./CartItem";
import { useContext } from "react";

function CartList() {
  const {
    order = [],
    removeFromCart = Function.prototype,
    toggleShowCart = Function.prototype,
  } = useContext(ShopContext);

  const totalPrice = order.reduce(function (sum, el) {
    return sum + el.price * el.quantity;
  }, 0);

  return (
    <div className="cart-wrapper collection">
      <button className="cart-close" onClick={toggleShowCart}>
        <i className="material-icons">close</i>
      </button>
      <p className="cart-total collection-item active  blue darken-1">Basket</p>
      <ul className="cart-list">
        {order.length ? (
          order.map((orderItem) => (
            <CartItem
              key={orderItem.id}
              {...orderItem}
              removeFromCart={removeFromCart}
            />
          ))
        ) : (
          <li className="collection-item cart-item">The basket is empty</li>
        )}
      </ul>
      <p className="cart-total collection-item active  blue darken-1">
        Total price: {totalPrice.toFixed(2) ? totalPrice.toFixed(2) + "$" : 0}
      </p>
    </div>
  );
}

export default CartList;
