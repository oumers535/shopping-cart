import React from "react";

import ProductCard from "./ProductCard";
import { PRODUCTS } from "../data/products";



 const Product = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-3 sm:px-6 md:px-20 lg:px-32">
      <div className="text-3xl font-bold text-purple-800 text-center my-5 py-4 ">
        <h1>Masho Mini Shop</h1>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};
export default Product;