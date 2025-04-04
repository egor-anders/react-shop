import { useContext } from "react";
import ShopContext from './../context/ShopContext';

function Product({id, title, image, price }) {
  const {addToCart = Function.prototype} = useContext(ShopContext);

  const handleClick = () => {
    addToCart({
        id,
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
