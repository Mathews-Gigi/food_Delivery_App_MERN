import React, { useState } from "react";
import { Routes, Route, Router } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import OrderPage from "./pages/order_page/OrderPage";
import Footer from "./components/footer/Footer";
import LoginPopUp from "./components/login_pop_up/LoginPopUp";
function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopUp setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <NavBar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<OrderPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
