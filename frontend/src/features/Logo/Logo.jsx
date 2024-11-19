import React from "react";
import { Link } from "react-router-dom";
export default function Logo() {
  return (
    <Link to="/">
      <img
        className="h-12 w-12 cursor-pointer"
        src="https://static.vecteezy.com/system/resources/previews/023/654/784/non_2x/golden-logo-template-free-png.png"
        alt="Logo"
      />
    </Link>
  );
}
