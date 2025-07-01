import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Products from "../../pages/Products";
import AIasistent from "../../pages/AIasistent";
import Contact from "../../pages/Contact";
import AppLayout from "../Components/AppLayout";
import AllProducts from "../../pages/AllProducts";
import ProductDetailPage from "../../pages/ProductDetailPage";

function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="/products/detail" element={<ProductDetailPage />} />
          <Route path="products/allproducts" element={<AllProducts />} />
          <Route path="ai-assistant" element={<AIasistent />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Index;
