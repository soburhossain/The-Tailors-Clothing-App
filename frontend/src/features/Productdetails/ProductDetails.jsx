import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "../../ui/NavBar.jsx";

export default function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);
  const location = useLocation();
  const productDetails = location.state;
  const navigate = useNavigate();

  // Load cart from localStorage when the component mounts
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart); // Initialize the cart state with stored cart
  }, []);

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value)); // Update the quantity
  };

  const handleAddToCart = (e) => {
    e.preventDefault();

    const existingProductIndex = cart.findIndex(
      (item) => item.id === productDetails.id
    );

    let updatedCart;

    if (existingProductIndex !== -1) {
      updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += quantity;
      updatedCart[existingProductIndex].totalPrice =
        updatedCart[existingProductIndex].quantity * productDetails.unitPrice;
    } else {
      const orderedProductDetails = {
        ...productDetails,
        quantity: quantity,
        totalPrice: productDetails.unitPrice * quantity,
      };
      updatedCart = [...cart, orderedProductDetails];
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    navigate("/shop");
  };

  return (
    <div className="h-[100vh] max-w-[100vw] flex flex-col justify-center items-center bg-purple-100">
      <div className="mb-7">
        <NavBar />
      </div>

      <div className="h-[80%] max-w-[100vw] flex flex-col justify-center items-center bg-stone-200">
        <img
          className="h-[60vh] w-[40vw]"
          src={productDetails.imageUrl}
          alt="Product"
        />
        <p className="flex gap-5 mt-5">
          <span>Price: {productDetails.unitPrice} ৳</span>
          <span>Color: {productDetails.colors}</span>
        </p>
        <div className="flex flex-row items-center justify-center gap-5">
          <p>Quantity</p>
          <select
            id="number-select"
            value={quantity}
            onChange={handleQuantityChange}
          >
            {[1, 2, 3, 4, 5].map((number) => (
              <option key={number} value={number}>
                {number}
              </option>
            ))}
          </select>
          <button
            onClick={handleAddToCart}
            className="mt-3 px-4 py-2 rounded-lg bg-gray-400 hover:bg-gray-500"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
