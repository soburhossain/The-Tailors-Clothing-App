import React from "react";

export default function OrderImageHeader({ order }) {
  return (
    <div className="relative">
      {order.products[0]?.imageUrl ? (
        <img
          src={order.products[0]?.imageUrl}
          alt={order.products[0]?.title}
          className="w-full h-48 object-cover object-center rounded-t-lg"
        />
      ) : (
        <div className="h-48 bg-gray-300 rounded-t-lg flex items-center justify-center">
          <span className="text-gray-500">No Image</span>
        </div>
      )}
    </div>
  );
}
