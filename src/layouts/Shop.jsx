import { useEffect } from "react";
import { useState } from "react";
import API_URL from "../config";
import Products from "../components/Products";
import Preloader from "../components/Preloader";

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setLoading(false);
      });
  }, []);
  return (
    <main>
      <div className="container">
        {loading ? <Preloader /> : <Products products={products} />}
      </div>
    </main>
  );
}

export default Shop;
