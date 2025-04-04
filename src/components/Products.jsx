import { useContext } from "react";
import Product from "./Product";
import ShopContext from "../context/ShopContext";

function Products() {
  const { products } = useContext(ShopContext);
  return (
    <>
      {products.length ? (
        <ul className="cards-list">
          {products.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </ul>
      ) : (
        <h2>Nothing found</h2>
      )}
    </>
  );
}

export default Products;
