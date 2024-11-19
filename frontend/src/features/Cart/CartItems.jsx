import React from "react";
import { MdDelete } from "react-icons/md";

export default function CartItems({ item, deleteProductFromCart }) {
  return (
    <div className="m-4 sm:m-6 md:m-8 h-auto w-full sm:w-[18vw] md:w-[15vw] flex flex-col shadow-lg rounded-lg relative">
      {/* Product Image */}
      <img
        className="h-[200px] sm:h-[250px] w-full object-cover rounded-t-lg"
        src={item.imageUrl}
        alt={item.name}
      />

      {/* Product Info */}
      <div className="p-4 flex flex-col items-center bg-white rounded-b-lg shadow-inner">
        <p className="text-lg sm:text-xl font-medium text-gray-800">
          Price: {item.totalPrice} ৳
        </p>
        <p className="text-sm sm:text-base text-gray-600">
          Product Code: {item.id}
        </p>
        <p className="text-sm sm:text-base text-gray-600">
          Quantity: {item.quantity}
        </p>

        {/* Delete Icon */}
        <MdDelete
          onClick={() => deleteProductFromCart(item.id)}
          className="absolute top-2 right-2 text-2xl cursor-pointer text-red-700 hover:text-red-500 transition"
        />
      </div>
    </div>
  );
}
