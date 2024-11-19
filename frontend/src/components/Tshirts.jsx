import React from "react";
import { tshirt } from "../data/tshirt.js";
import ProductItems from "./ProductItems.jsx";

export default function Tshirts() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 w-full overflow-y-scroll p-5">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl">
          Explore Our T-Shirt Collection
        </h1>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Stylish and comfortable T-shirts for every occasion
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto gap-7">
        {tshirt.map((item) => (
          <ProductItems item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
