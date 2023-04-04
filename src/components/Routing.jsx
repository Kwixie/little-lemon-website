import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import MenuPage from "./pages/MenuPage";
import OrderPage from "./pages/OrderPage";
import ReservationPage from "./pages/ReservationPage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/reservations" element={<ReservationPage />} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default Routing;
