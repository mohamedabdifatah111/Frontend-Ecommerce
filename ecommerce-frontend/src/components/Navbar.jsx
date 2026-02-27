import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { cart } = useCart();

  return (
    <nav className="navbar">
      <h2>MyStore</h2>

      <div className={`nav-links ${open ? "open" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/products" onClick={() => setOpen(false)}>Products</Link>
        <Link to="/cart" onClick={() => setOpen(false)}>
          Cart ({cart.length})
        </Link>
      </div>

      <button className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </button>
    </nav>
  );
}

export default Navbar;