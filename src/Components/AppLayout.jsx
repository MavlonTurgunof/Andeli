import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import PostHeader from "./PostHeader";
import Footer from "./Footer";

function AppLayout() {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
