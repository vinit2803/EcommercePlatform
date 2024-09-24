import React from "react";
import Index from "./header/Index";
import { useSelector } from "react-redux";

const Home = ({ showAlert }) => {
  const count = useSelector((state) => state.count);
  return (
    // const {showAlert} = props.showAlert();
    <>
      <p>Item added in cart : {count}</p>
      <Index showAlert={showAlert}></Index>
    </>
  );
};

export default Home;
