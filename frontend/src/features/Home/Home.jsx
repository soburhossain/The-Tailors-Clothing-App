import React from "react";
import NavBar from "../../ui/NavBar.jsx";
import HomeBackground from "../Home/HomeBackground.jsx";
import ShopButton from "../../ui/ShopButton.jsx";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="relative bg-gray-100">
      <NavBar />
      <HomeBackground />
      <Link className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <ShopButton />
      </Link>
    </div>
  );
}
