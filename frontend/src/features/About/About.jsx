import React from "react";
import { useNavigate } from "react-router-dom";
export default function About() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  return (
    <div className=" bg-gray-50 flex flex-col justify-center items-center">
      <div className="w-full max-w-4xl h-auto bg-white border border-gray-300 shadow-lg rounded-lg p-6 sm:p-8 mt-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-gray-800 mb-6 text-center">
          About Our Clothing Store
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 text-center leading-relaxed max-w-3xl mx-auto">
          Welcome to our clothing store! We specialize in providing
          high-quality, trendy, and affordable apparel for all occasions. Our
          mission is to bring the latest fashion trends to our customers while
          maintaining a commitment to comfort and durability.
        </p>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 mb-12">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-serif font-semibold text-gray-800 mb-4">
              Quality
            </h2>
            <p className="text-gray-600">
              We use premium fabrics to ensure durability and comfort.
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-serif font-semibold text-gray-800 mb-4">
              Style
            </h2>
            <p className="text-gray-600">
              Our collections are inspired by the latest trends and are designed
              to keep you looking stylish.
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-serif font-semibold text-gray-800 mb-4">
              Affordability
            </h2>
            <p className="text-gray-600">
              We believe that fashion should be accessible to everyone, which is
              why we offer great prices on all our items.
            </p>
          </div>
        </div>

        <div className="w-full text-center">
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
            Join us in exploring the best of fashion and style. Start shopping
            today and experience timeless elegance!
          </p>
          {token ? (
            <button
              onClick={(e) => {
                e.preventDefault();
                navigate("/shop");
              }}
              className="bg-gray-800 text-white py-3 px-8 rounded-full text-lg sm:text-xl hover:bg-gray-700 transition duration-300"
            >
              Start Shopping
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.preventDefault();
                navigate("/login");
              }}
              className="bg-gray-800 text-white py-3 px-8 rounded-full text-lg sm:text-xl hover:bg-gray-700 transition duration-300"
            >
              LogIn
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
