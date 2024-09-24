import React, { useContext, useEffect } from "react";
import "../style/Product.css";
import productContext from "../context/products/productContext";
import { Link } from "react-router-dom";
import { increment } from "../state/actions/cartActions";
import { useDispatch } from "react-redux";

const Product = ({ showAlert }) => {
  const dispatch = useDispatch();
  const { products, getProducts } = useContext(productContext);
  // let navigate = useNavigate();

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);
  // const { product, UpdateProduct } = props;

  if (!products || products.length === 0) {
    return <p>Loading products...</p>; // Show a loading message while products are being fetched
  }

  return (
    <>
      <div className="product-card-container">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <Link to={`/product/${product._id}`}>
              <img src={product.image} alt={product.name} />{" "}
              <h3>{product.name}</h3>
            </Link>

            <p>
              <strong>Price:</strong> ${product.price}
            </p>

            <button
              onClick={() => {
                showAlert("Item added in cart", "success");
                dispatch(increment(product));
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
