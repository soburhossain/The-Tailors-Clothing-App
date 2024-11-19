import React from "react";
import { useNavigate } from "react-router-dom";
export default function ProductItems({ item }) {
  const { id, inStock, imageUrl } = item;
  const navigate = useNavigate();
  const getProductDetails = (item) => {
    const data = item;
    navigate("/productDetails", { state: data });
  };
  return (
    <div className="h-[15rem] w-[15rem] flex flex-col  shadow-sm shadow-black my-3 ">
      <img
        className={`h-[10rem] w-[10rem] mb-1 justify-center mx-8 ${
          !inStock && "grayscale"
        }`}
        src={imageUrl}
        alt={id}
      />
      {inStock ? (
        <p className="text-center">In Stock</p>
      ) : (
        <p className="text-center grayscale my-[4vh]">Out Of Stock</p>
      )}
      {inStock && (
        <button
          onClick={() => getProductDetails(item)}
          className="bg-slate-200 px-4 py-3 my-1 hover:bg-slate-300"
        >
          Product Details
        </button>
      )}
    </div>
  );
}
