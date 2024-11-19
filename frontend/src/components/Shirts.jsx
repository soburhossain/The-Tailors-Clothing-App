import React from "react";
import { shirts } from "../data/shirt.js";
import ProductItems from "./ProductItems.jsx";

export default function Shirts() {
  return (
    <div className="w-full overflow-y-scroll p-5">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl">
          Discover Our Shirt Collection
        </h1>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Find the perfect shirt for every occasion
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto gap-7">
        {shirts.map((item) => (
          <ProductItems item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}