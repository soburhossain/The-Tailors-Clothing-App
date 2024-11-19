import React, { useContext } from "react";
import { customerContext } from "../Admin/AdminContext/AdminContext";

export default function ToggleButton({ order }) {
  const { toggleOrderDetails, expandedOrder } = useContext(customerContext);
  return (
    <button
      onClick={() => toggleOrderDetails(order._id)}
      className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
    >
      {expandedOrder === order._id ? "Hide Details" : "View Order Details"}
    </button>
  );
}
