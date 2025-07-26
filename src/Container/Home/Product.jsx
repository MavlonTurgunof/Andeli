import React, { useState } from "react";
import ProductList1 from "./ProductList1";
import Filters from "./Filter";
import Container from "../../Components/Container";

const Product = () => {
  const [filters, setFilters] = useState({
    mountType: null,
    powers: [],
  });

  return (
    <Container>
      <div>
        <div className="flex flex-row">
          <Filters filters={filters} setFilters={setFilters} />
          <ProductList1 filters={filters} />
        </div>
      </div>
    </Container>
  );
};

export default Product;
