import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import AIasistent from "../../pages/AIasistent";
import Contact from "../../pages/Contact";
import AppLayout from "../Components/AppLayout";
import ScrollToTop from "../Components/ScrollToTop";
import BlogsPage from "../../pages/BlogsPage";
import AboutUsPage from "../../pages/AboutUsPage";
import BlogDetail from "../Container/Blogs/BlogDetail";

function Index() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/blogs/detail" element={<BlogDetail />} />
          <Route path="/ai-assistant" element={<AIasistent />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Index;
