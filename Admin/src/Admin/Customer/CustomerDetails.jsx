import React from "react";

export default function CustomerDetails({ order }) {
  return (
    <>
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Customer Information
      </h2>
      <p className="text-gray-600 mb-2">
        <strong>Name:</strong> {order.customerInfo.name}
      </p>
      <p className="text-gray-600 mb-2">
        <strong>Phone:</strong> {order.customerInfo.phone}
      </p>
      <p className="text-gray-600 mb-6">
        <strong>Address:</strong> {order.customerInfo.address}
      </p>
    </>
  );
}
