import { useEffect } from 'react';
import { useState } from 'react';
import API_URL from '../config';
import Products from '../components/Products';
import Preloader from '../components/Preloader';
import Cart from '../components/Cart';
import CartContext from '../context/CartContext';

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [orderList, setOrderList] = useState([]);
  console.log(orderList);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setLoading(false);
      });
  }, []);

  const addToCart = (order) => {
    console.log('shop')
    setOrderList([...orderList, order]);
  };

  return (
    <main>
      <div className="container">
        {loading ? (
          <Preloader />
        ) : (
          <CartContext.Provider value={{addToCart}}>
            <Cart quantity={orderList.length} />
            <Products products={products} />
          </CartContext.Provider>
        )}
      </div>
    </main>
  );
}

export default Shop;
