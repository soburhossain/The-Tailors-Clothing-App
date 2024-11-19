import React from "react";
import { useNavigate } from "react-router-dom";

export default function LogOut() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogoutConfirm = () => {
    localStorage.removeItem("token");
    localStorage.setItem("isLoggedIn", JSON.stringify(false));
    localStorage.removeItem("cart");
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };

  if (!token) {
    navigate("/login");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white w-full max-w-sm rounded-lg shadow-lg p-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Confirm Logout
            </h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to log out of your account?
            </p>
          </div>
          <div className="flex justify-between">
            <button
              onClick={handleCancel}
              className="w-1/2 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg mr-2 hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              onClick={handleLogoutConfirm}
              className="w-1/2 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
            >
              Yes, Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
