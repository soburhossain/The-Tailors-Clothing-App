import React from "react";
import { useNavigate } from "react-router-dom";
export default function ShopButton() {
  const style =
    "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 text-yellow-500 px-6 py-3 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300 text-lg sm:text-xl";

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        navigate(`${token ? "/shop" : "/login"}`);
      }}
      className={style}
    >
      {token ? "Go Shop" : "logIn"}
    </button>
  );
}
