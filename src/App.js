import "./style/App.css";
import Footer from "./components/header/Footer";
import Login from "./components/header/Login";
import SignUp from "./components/header/SignUp";
import Navbar from "./components/header/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductState from "./context/products/ProductState";
import SellerLogin from "./components/header/SellerLogin";
import Cart from "./components/Cart";
import Alert from "./components/Alert";
import { useState } from "react";
import Account from "./components/Account";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <Router>
        <ProductState>
          <Navbar></Navbar>
          <Alert alert={alert}></Alert>
          <Routes>
            <Route
              path="/"
              element={<Home showAlert={showAlert}></Home>}
            ></Route>
            <Route
              path="/Login"
              element={<Login showAlert={showAlert}></Login>}
            ></Route>
            <Route
              path="/SignUp"
              element={<SignUp showAlert={showAlert}></SignUp>}
            ></Route>
            <Route
              path="/Cart"
              element={<Cart showAlert={showAlert}></Cart>}
            ></Route>
            <Route
              path="/SellerLogin"
              element={<SellerLogin showAlert={showAlert}></SellerLogin>}
            ></Route>
            <Route
              path="/Account"
              element={<Account showAlert={showAlert}></Account>}
            ></Route>
          </Routes>
          <Footer></Footer>
        </ProductState>
      </Router>
    </>
  );
}

export default App;
