import { useContext, useEffect } from "react";
import API_URL from "../config";
import Products from "../components/Products";
import Preloader from "../components/Preloader";
import Cart from "../components/Cart";
import ShopContext from "../context/ShopContext";
import CartList from "../components/CartList";
import Alert from "../components/Alert";

function Shop() {
  const {loading, order, showCart, alertName, setProducts} =  useContext(ShopContext);
  
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
    //eslint-disable-next-line
  }, []);

  return (
    <main>
      <div className="container">
        {loading ? (
          <Preloader />
        ) : (
          <>
            {alertName && <Alert />}
            <Cart quantity={order.length} />
            <Products />
            {showCart ? <CartList /> : null}
          </>
        )}
      </div>
    </main>
  );
}

export default Shop;
