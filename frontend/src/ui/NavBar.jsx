import React from "react";
import NavItems from "../components/NavItems.jsx";
import Logo from "../features/Logo/Logo.jsx";
function NavBar({ type }) {
  const style = {
    primary: "w-full bg-transparent py-4 px-6 md:px-24 text-yellow-600",
    bgGray:
      "w-full bg-gray-900 my-0 mx-auto py-4 px-6 md:px-24 opacity-95 text-yellow-500",
  };
  return (
    <div className={`${type === "bg-gray" ? style.bgGray : style.primary}`}>
      <div
        className={`${
          type === "bg-gray"
            ? "flex items-center justify-between"
            : "flex items-center justify-between w-full"
        }`}
      >
        <Logo />
        <NavItems />
      </div>
    </div>
  );
}

export default NavBar;
