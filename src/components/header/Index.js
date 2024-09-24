import React from "react";
import Product from "../Product";
// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement } from "../state/actions/cartActions";

const Index = ({ showAlert }) => {
  // const { showAlert } = props.showAlert();
  // const count = useSelector((state) => state.count);
  // const dispatch = useDispatch();

  return (
    // <div>
    //   <p>Count: {count}</p>
    //   <button onClick={() => dispatch(increment())}>Increment</button>
    //   <button onClick={() => dispatch(decrement())}>Decrement</button>
    // </div>
    <>
      <Product showAlert={showAlert}></Product>
    </>
  );
};

export default Index;
