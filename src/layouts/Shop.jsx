import { useEffect } from 'react';
import { useState } from 'react';
import API_URL from '../config';
import Products from '../components/Products';
import Preloader from '../components/Preloader';
import Cart from '../components/Cart';
import CartContext from '../context/CartContext';
import CartList from '../components/CartList';
import Alert from '../components/Alert';

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [alertName, setAlertName] = useState('');

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setLoading(false);
      });
  }, []);

  const addToCart = (item) => {
    const orderIndex = order.findIndex((orderItem) => orderItem.id === item.id);

    if (orderIndex === -1) {
      const newItem = {
        ...item,
        quantity: 1,
      };

      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (orderIndex === index) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });

      setOrder(newOrder);
    }
  };

  const removeFromCart = (id) => {
    setOrder(order.filter((orderItem) => orderItem.id !== id));
  };

  const increaseQuantity = (id) => {
    const newOrder = order.map((orderItem) => {
      if (orderItem.id === id) {
        return {
          ...orderItem,
          quantity: orderItem.quantity + 1,
        };
      } else {
        return orderItem;
      }
    });
    setOrder(newOrder);
  };

  const decreaseQuantity = (id) => {
    const newOrder = order.map((orderItem) => {
      if (orderItem.id === id) {
        return {
          ...orderItem,
          quantity: orderItem.quantity - 1,
        };
      } else {
        return orderItem;
      }
    });
    setOrder(newOrder);
  };

  const toggleShowCart = () => {
    setShowCart(!showCart);
  };

  const openAlert = (name) => {
    setAlertName(name);
  }

  const closeAlert = () => {
    setAlertName('');
  };

  return (
    <main>
      <div className="container">
        {loading ? (
          <Preloader />
        ) : (
          <CartContext.Provider
            value={{
              addToCart,
              removeFromCart,
              decreaseQuantity,
              increaseQuantity,
              openAlert
            }}
          >
            {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
            <Cart quantity={order.length} toggleShowCart={toggleShowCart} />
            <Products products={products} />

            {showCart ? (
              <CartList order={order} toggleShowCart={toggleShowCart} />
            ) : null}
          </CartContext.Provider>
        )}
      </div>
    </main>
  );
}

export default Shop;
