import { useContext } from "react";
import CartContext from './../context/CartContext';

function Product({ title, image, price }) {
  const {addToCart = () => {}} = useContext(CartContext);

  const handleClick = () => {
    console.log(123)
    addToCart({
        title,
        price
    })
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
