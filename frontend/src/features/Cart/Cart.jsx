import React, { useEffect, useState } from "react";
import CartItems from "../Cart/CartItems.jsx";
import { useNavigate } from "react-router-dom";
import NavBar from "../../ui/NavBar.jsx";
export default function Cart() {
  const deliveryCharge = 120;
  const [updatedCart, setUpdatedCart] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setUpdatedCart(storedCart);
  }, []);

  const deleteProductFromCart = (id) => {
    const updatedCartList = updatedCart.filter((item) => item.id !== id);
    setUpdatedCart(updatedCartList);
    localStorage.setItem("cart", JSON.stringify(updatedCartList));
  };

  const totalPrice = updatedCart.reduce(
    (acc, item) => acc + item.totalPrice,
    0
  );
  const totalItems = updatedCart.length;

  return (
    <>
      <NavBar />
      <div className="max-w-[100vw] p-5">
        <h1 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 mb-5">
          Your Shopping Cart
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
          {totalItems > 0 ? (
            updatedCart.map((item) => (
              <CartItems
                deleteProductFromCart={deleteProductFromCart}
                item={item}
                key={item.id}
              />
            ))
          ) : (
            <p className="text-red-700 text-center font-semibold col-span-4">
              No Product has been added to the cart yet!
            </p>
          )}
        </div>

        {totalItems > 0 && (
          <div className="bg-stone-200 p-5 mt-7 rounded-lg shadow-md">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 text-center">
              Cart Summary
            </h2>
            <p className="mb-2 text-center">Total items: {totalItems}</p>
            <p className="mb-2 text-center">Product Price: {totalPrice} ৳</p>
            <p className="mb-2 text-center">
              Total Price: {totalPrice + deliveryCharge} ৳ (Including delivery
              charge)
            </p>
            <p className="text-center">
              <button
                onClick={() => navigate("/createOrder")}
                className="p-4 bg-gray-900 hover:bg-gray-800 text-center text-stone-200 rounded-lg my-5 w-full sm:w-auto"
              >
                Place The Order
              </button>
            </p>
          </div>
        )}
      </div>
    </>
  );
}
