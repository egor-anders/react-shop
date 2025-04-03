import { useContext } from 'react';
import CartContext from './../context/CartContext';

function CartItem({ id, title, price, quantity }) {
  const { removeFromCart = Function.prototype, increaseQuantity = Function.prototype, decreaseQuantity = Function.prototype } = useContext(CartContext);

  return (
    <li className="collection-item cart-item">
      <p>
        {title}{' '}
        <span>
          x{quantity} = {(price * quantity).toFixed(2)}$
        </span>
      </p>
      <div className="cart-controls">
        <button className="waves-effect cart-control waves-teal btn-flat" disabled={quantity == 1 ? true : false} onClick={() => decreaseQuantity(id)}>-</button>
        <button className="waves-effect cart-control waves-teal btn-flat" onClick={() => increaseQuantity(id)}>+</button>
      </div>
      <button className="cart-delete" onClick={() => removeFromCart(id)}>
        <i className="material-icons">remove_shopping_cart</i>
      </button>
    </li>
  );
}

export default CartItem;
