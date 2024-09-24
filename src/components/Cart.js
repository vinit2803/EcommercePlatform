import React from "react";
import { decrement } from "../state/actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../style/Cart.css"; // Make sure to create a CSS file for styles

const Cart = ({ showAlert }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="cart-container">
      <h1>Items In Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((product) => (
          <div key={product._id} className="cart-item">
            <img
              src={product.image}
              alt={product.name}
              className="cart-item-image"
            />
            <div className="cart-item-details">
              <Link to={`/product/${product._id}`}>
                <h3>{product.name}</h3>
              </Link>
              <p>{product.description}</p>
              <p>
                <strong>Category:</strong> {product.category}
              </p>
              <p>
                <strong>In Stock:</strong> {product.inStock ? "Yes" : "No"}
              </p>
              <button
                onClick={() => {
                  showAlert("Item removed from cart", "success");
                  dispatch(decrement(product._id));
                }}
              >
                Remove from Cart
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
