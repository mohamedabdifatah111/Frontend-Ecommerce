import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;