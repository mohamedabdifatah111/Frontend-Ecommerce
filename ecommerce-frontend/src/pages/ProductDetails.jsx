import { useParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="details-container">
      <img src={product.image} alt={product.title} />

      <div>
        <h1>{product.title}</h1>
        <p>${product.price}</p>
        <button
          className="view-btn"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;