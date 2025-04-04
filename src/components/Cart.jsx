import { useContext } from "react"
import ShopContext from "../context/ShopContext"

function Cart({quantity}) {
  const {toggleShowCart} = useContext(ShopContext)

  return (
    <button className="cart-icon" onClick={toggleShowCart}>
        <i className="material-icons">shopping_cart</i>
        {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </button>
  )
}

export default Cart
