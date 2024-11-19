import React from "react";
import { Link } from "react-router-dom";
import modifyOrderedInfo from "../../Services/modifyOrderInfo";
export default function OrderStatus() {
  const orderedInfo = JSON.parse(localStorage.getItem("orderedInfo"));
  console.log(orderedInfo);
  const result = modifyOrderedInfo(orderedInfo);
  localStorage.setItem("result", JSON.stringify(result));
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10">
      <div className="max-w-4xl w-full bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Your Order Summary
        </h1>

        <div className="space-y-4">
          {result?.products?.map((product, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-4 border-b border-gray-300 rounded-lg hover:bg-gray-100"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <h3 className="text-lg font-semibold">{product.title}</h3>
                  <p className="text-sm text-gray-500">{product.colors}</p>
                </div>
              </div>
              <div className="text-lg font-medium text-gray-800">
                {product.totalPrice} ৳
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-indigo-50 rounded-lg">
          <h2 className="text-xl font-semibold text-indigo-600">
            User Information
          </h2>
          <div className="mt-2">
            <p>
              <strong>Name:</strong>{" "}
              {result?.userObject?.user?.name || "Not Available"}
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              {result?.userObject?.user?.phone || "Not Available"}
            </p>
            <p>
              <strong>Address:</strong>{" "}
              {result?.userObject?.user?.address || "Not Available"}
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-between items-center font-semibold text-lg">
          <p className="text-gray-800">Total:</p>
          <p className="text-indigo-600">
            {result?.products?.reduce(
              (total, product) => total + product.totalPrice,
              0
            )}{" "}
            ৳
          </p>
        </div>

        <div className="mt-6 text-lg font-semibold text-center text-indigo-600">
          <p>Your order will be delivered within the next 2 days! 🎉</p>
          <p className="text-sm text-gray-500">
            We can't wait for you to enjoy your items. Stay tuned for updates!
          </p>
        </div>

        <div className="mt-6 text-center">
          <Link
            to="/"
            className="text-indigo-600 hover:text-indigo-800 text-lg font-semibold"
          >
            Go to Home Page
          </Link>
        </div>
      </div>
    </div>
  );
}
