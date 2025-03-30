function Cart({quantity}) {

  return (
    <div className="cart-icon">
        <i className="material-icons">shopping_cart</i>
        {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  )
}

export default Cart
