import React, { useState } from "react";
import ProductContext from "./productContext";

const ProductState = (props) => {
  const host = "http://localhost:5000";
  const productInitial = [];

  const [products, setProducts] = useState(productInitial);

  // fetch all products
  const getProducts = async () => {
    const response = await fetch(`${host}/api/product/fetchallproducts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setProducts(json);
    // console.log(json);
  };

  return (
    <ProductContext.Provider value={{ products, getProducts }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
