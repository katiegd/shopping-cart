import React from "react";
import Navigation from "./Nav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="main-content">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}
