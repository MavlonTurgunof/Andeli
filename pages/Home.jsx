import React from "react";
import Advertisement from "../src/Container/Home/Advertisement";
import ProductList1 from "../src/Container/Home/ProductList1";
import TypePro from "../src/Container/Home/TypePro";
import ProductList2 from "../src/Container/Home/ProductList2";
import AiSec from "../src/Container/Home/AiSec";

function Home() {
  return (
    <>
      <Advertisement />
       <TypePro />
      <ProductList1 />
      <ProductList2 />
      <AiSec />
    </>
  );
}

export default Home;
