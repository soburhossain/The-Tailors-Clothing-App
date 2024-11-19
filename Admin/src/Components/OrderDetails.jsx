import React, { useContext } from "react";
import { customerContext } from "../Admin/AdminContext/AdminContext";

export default function OrderDetails({ order }) {
  const { calculateOrderTotal } = useContext(customerContext);
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Ordered Items
      </h3>
      {order.products.map((product) => (
        <div
          key={product.id}
          className="flex items-center justify-between border-t py-3"
        >
          <div className="flex items-center">
            <img
              src={product.imageUrl || "/default-product-image.png"}
              alt={product.title}
              className="h-16 w-16 object-cover rounded-md shadow-sm mr-4"
            />
            <div>
              <p className="font-semibold text-gray-700">{product.title}</p>
              <p className="text-sm text-gray-500">Color: {product.colors}</p>
              <p className="text-sm text-gray-600">
                Price: ${product.unitPrice}
              </p>
              <p className="text-sm text-gray-600">
                Quantity: {product.quantity}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-lg font-semibold text-indigo-600">
              Total: ${product.totalPrice}
            </p>
          </div>
        </div>
      ))}
      {/* Display total price for the order */}
      <div className="mt-4 text-right">
        <p className="text-xl font-semibold text-indigo-600">
          Order Total: ${calculateOrderTotal(order)}
        </p>
      </div>
    </div>
  );
}
