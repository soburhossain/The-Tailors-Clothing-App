import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const [logInmessage, setLogInMessage] = useState("");
  const [LogInisLoading, setLogInIsLoading] = useState(false);
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const handleLoginFormChange = (e) => {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
  };
  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();
    try {
      setLogInIsLoading(true);
      const response = await axios.post(
        "http://localhost:8000/api/customer/login",
        loginFormData
      );
      const { token, msg } = response.data;
      setLogInMessage(msg);
      setLogInIsLoading(false);
      if (token) {
        localStorage.setItem("token", token);
        localStorage.setItem("isLoggedIn", JSON.stringify(true));
        navigate("/shop");
      }
    } catch (error) {
      console.error(error);
      setLogInMessage("Login failed. Please try again.");
      setLogInIsLoading(false);
    }
  };
  const isSignedUp = JSON.parse(localStorage.getItem("isSignedUp"));

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back!</h1>
          <p className="text-sm text-gray-600">
            Login to access your account and explore the possibilities.
          </p>
        </div>
        <form onSubmit={handleLoginFormSubmit} className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              value={loginFormData.email}
              onChange={handleLoginFormChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              required
              placeholder="Enter your password"
              value={loginFormData.password}
              onChange={handleLoginFormChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="text-center">
            {LogInisLoading ? (
              <p className="text-sm text-blue-500">
                Logging in... Please wait.
              </p>
            ) : (
              <p className="text-sm text-blue-700 font-semibold">
                {logInmessage}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">Don't have an account?</p>
            <button
              disabled={isSignedUp}
              onClick={(e) => {
                e.preventDefault();
                navigate("/signup");
              }}
              className={`text-blue-500 hover:underline ${
                isSignedUp && "cursor-not-allowed"
              }`}
            >
              Sign Up Here
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
