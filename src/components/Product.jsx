import { useContext } from "react";
import CartContext from './../context/CartContext';

function Product({id, title, image, price }) {
  const {addToCart = Function.prototype, openAlert= Function.prototype} = useContext(CartContext);

  const handleClick = () => {
    addToCart({
        id,
        title,
        price
    })
    openAlert(title)
  }

  return (
    <li className="card">
      <div className="card-image">
        <img src={image} />
      </div>
      <div className="card-content">
        <span className="card-title">{title}</span>
      </div>
      <div className="card-action">
        <span style={{fontSize: '24px'}}>{price}$</span>
        <button onClick={handleClick} className="right blue darken-2 waves-effect waves-light btn">Buy</button>
      </div>
    </li>
  );
}

export default Product;
