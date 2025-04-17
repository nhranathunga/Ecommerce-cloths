import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Collection from "./pages/Collection";
import Cart from "./pages/Cart";
import About from "./pages/About";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
