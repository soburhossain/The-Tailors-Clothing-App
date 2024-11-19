import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CreateOrder() {
  const result = JSON.parse(localStorage.getItem("result"));
  console.log(result);

  const style = {
    inputStyle:
      "p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500",
    labelStyle: "text-lg font-medium text-gray-700",
  };
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    location: "",
  });

  const postOrder = async () => {
    try {
      const orderData = { ...result, customerInfo: formData }; // Ensure the customer info is added to the order
      const response = await axios.post(
        "http://localhost:8000/api/customer/order",
        orderData
      );
      console.log("Order posted:", response.data);
    } catch (error) {
      console.error("Error posting order:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const cart = JSON.parse(localStorage.getItem("cart"));
    const data = [...cart, { customerInfo: formData }];
    localStorage.setItem("orderedInfo", JSON.stringify(data));
    localStorage.removeItem("cart");
    navigate("/orderstatus");
    postOrder();
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="p-8 bg-white shadow-xl rounded-lg w-full max-w-lg sm:max-w-md md:max-w-xl lg:max-w-2xl">
        <h1 className="text-3xl font-serif font-semibold text-gray-800 mb-8 text-center">
          Create Your Order
        </h1>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <label className={style.labelStyle}>Your Name</label>
          <input
            required
            className={style.inputStyle}
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
          />

          <label className={style.labelStyle}>Phone Number</label>
          <input
            required
            className={style.inputStyle}
            type="tel"
            name="phone"
            placeholder="Enter Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />

          <label className={style.labelStyle}>Your Address</label>
          <input
            required
            className={style.inputStyle}
            type="text"
            name="address"
            placeholder="Enter Address"
            value={formData.address}
            onChange={handleChange}
          />
          <button className="p-4 text-white bg-gray-900 rounded-lg text-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300">
            Confirm The Order
          </button>
        </form>
      </div>
    </div>
  );
}
