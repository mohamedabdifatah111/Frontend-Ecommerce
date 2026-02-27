import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, total } = useCart();

  if (cart.length === 0)
    return <h2>Your cart is empty</h2>;

  return (
    <div>
      <h1>Your Cart</h1>

      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <h2>Total: ${total}</h2>

      <Link to="/checkout" className="view-btn">
        Proceed to Checkout
      </Link>
    </div>
  );
}

export default Cart;