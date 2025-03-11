import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext"; // ✅ Chỉ import cần thiết

import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import BlogPage from "./pages/BlogPage";
import ServicesPage from "./pages/ServicesPage";
import ContactUsPage from "./pages/ContactUsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CartPage from "./pages/CartPage";

function App() {
    return (
        <Router>
            <CartProvider> {/* ✅ CartProvider bọc toàn bộ ứng dụng */}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/about-us" element={<AboutUsPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/contact-us" element={<ContactUsPage />} />
                    <Route path="/dang-nhap" element={<LoginPage />} />
                    <Route path="/dang-ky" element={<RegisterPage />} />
                    <Route path="/gio-hang" element={<CartPage />} />
                </Routes>
            </CartProvider>
        </Router>
    );
}

export default App;
