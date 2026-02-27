import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>

      <button
        className="view-btn"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>

      <Link to={`/product/${product.id}`} className="details-link">
        View Details
      </Link>
    </div>
  );
}

export default ProductCard;