import Product from "./Product";

function Products({ products }) {
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
