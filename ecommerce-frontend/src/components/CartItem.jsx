import { useCart } from "../context/CartContext";

function CartItem({ item }) {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <div className="cart-item">
      <h3>{item.title}</h3>
      <p>${item.price}</p>

      <input
        type="number"
        value={item.quantity}
        min="1"
        onChange={(e) =>
          updateQuantity(item.id, e.target.value)
        }
      />

      <button onClick={() => removeFromCart(item.id)}>
        Remove
      </button>
    </div>
  );
}

export default CartItem;