function Product({ title, image, price }) {
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
        <button className="right">Buy</button>
      </div>
    </li>
  );
}

export default Product;
