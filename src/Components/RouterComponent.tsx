import React from "react";
import Header from "./Header/Header";
import Home from "./Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./Product/Product";
import Login from "./Login/Login";
import CheckoutCart from "./Checkout/CheckoutCart";

function RouteComponent() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="about" element={<Product/>}></Route>
          <Route path="login" element={<Login/>}></Route>
          <Route path="checkout" element={<CheckoutCart/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RouteComponent;