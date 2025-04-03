function Cart({quantity, toggleShowCart}) {

  return (
    <button className="cart-icon" onClick={toggleShowCart}>
        <i className="material-icons">shopping_cart</i>
        {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </button>
  )
}

export default Cart
