import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
export default function Signup() {
  const [signupData, setSignupData] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [signUpmessage, setSignUpMessage] = useState("");
  const [issignUpLoading, setIsSignUpLoading] = useState(false);

  const handleSignUpFormChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleSignUpFormSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSignUpLoading(true);
      const response = await axios.post(
        "https://tailorbackend-0ycq.onrender.com/api/customer/signup",
        signupData
      );
      setIsSignUpLoading(false);
      localStorage.setItem("customer", JSON.stringify(signupData));
      localStorage.setItem("isSignedUp", JSON.stringify(true));

      const isSignedUp = JSON.parse(localStorage.getItem("isSignedUp"));
      if (isSignedUp) {
        navigate("/login");
      }
      setSignUpMessage(response.data.msg);
    } catch (error) {
      console.error(error);
      setIsSignUpLoading(false);
      setSignUpMessage("Sign up failed. Please try again.");
    }
  };
  const style = {
    inputStyle:
      "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
    labelStyle: "block text-sm font-medium text-gray-600",
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSignUpFormSubmit} className="space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800">Join Us Today!</h1>
            <p className="text-sm text-gray-600 mt-1">
              Create an account to unlock exclusive benefits.
            </p>
          </div>

          <div className="space-y-2">
            <label htmlFor="userName" className={style.labelStyle}>
              User Name
            </label>
            <input
              id="userName"
              type="text"
              name="userName"
              required
              placeholder="Enter a user name"
              onChange={handleSignUpFormChange}
              className={style.inputStyle}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className={style.labelStyle}>
              Your Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              onChange={handleSignUpFormChange}
              className={style.inputStyle}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className={style.labelStyle}>
              Set a Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              required
              placeholder="Password"
              onChange={handleSignUpFormChange}
              className={style.inputStyle}
            />
          </div>
          <div className="text-center">
            {issignUpLoading ? (
              <p className="text-sm text-blue-500">Please Wait...</p>
            ) : (
              <p className="text-sm text-red-500">{signUpmessage}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Create an Account
          </button>

          {/* Redirect to Login */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">Already have an account?</p>
            <button
              type="button"
              className="text-blue-500 hover:underline"
              onClick={(e) => {
                e.preventDefault();
                Navigate("/login");
              }}
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
