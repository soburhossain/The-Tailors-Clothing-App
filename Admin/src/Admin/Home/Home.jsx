import React, { useContext } from "react";

import { homeContext } from "./HomeContext";

const Home = () => {
  const {
    setUsername,
    setPassword,
    errorMessage,
    handleSubmit,
    username,
    password,
  } = useContext(homeContext);
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-xl max-w-md w-full">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Admin Login
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Username Field */}
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
              placeholder="Enter your username"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
