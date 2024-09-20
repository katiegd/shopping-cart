import { React, useState } from "react";
import Navigation from "./Nav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [cart, setCart] = useState([]);

  function addToCart(product, quantity) {
    setCart((prevCart) => {
      console.log(cart);
      const existingProductIndex = prevCart.findIndex(
        (item) => item.id === product.id
      );
      if (existingProductIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += quantity;
        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  }

  function removeFromCart(productId) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  }

  function getTotalQuantity() {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }

  return (
    <div className="main-content">
      <Navigation cart={cart} getTotalQuantity={getTotalQuantity} />
      <Outlet
        context={{ cart, setCart, addToCart, removeFromCart, getTotalQuantity }}
      />
      <Footer />
    </div>
  );
}
