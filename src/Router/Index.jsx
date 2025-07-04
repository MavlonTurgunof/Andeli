import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Products from "../../pages/Products";
import AIasistent from "../../pages/AIasistent";
import Contact from "../../pages/Contact";
import AppLayout from "../Components/AppLayout";
import AllProducts from "../../pages/AllProducts";
import ProductDetailPage from "../../pages/ProductDetailPage";
import ScrollToTop from "../Components/ScrollToTop";
import AllProductsList2 from "../Container/Products/AllProductsList2";
import AllProductsList from "../Container/Products/AllProductsList";

function Index() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="/products/detail" element={<ProductDetailPage />} />
          <Route path="products/Напольное" element={<AllProductsList2 />} />
          <Route path="products/Настенное" element={<AllProductsList />} />
          <Route path="ai-assistant" element={<AIasistent />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Index;
