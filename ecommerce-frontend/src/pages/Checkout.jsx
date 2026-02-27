function Checkout() {
  return (
    <div>
      <h1>Checkout</h1>

      <form className="checkout-form">
        <input placeholder="Full Name" required />
        <input placeholder="Email" required />
        <input placeholder="Address" required />
        <button className="view-btn">Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;