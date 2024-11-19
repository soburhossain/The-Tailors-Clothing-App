import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";
import { TbFileDescription } from "react-icons/tb";
import { SlLogout } from "react-icons/sl";
import NavButton from "../ui/NavButton";

export default function NavItems() {
  const reactIconStyle = "h-6 w-6 sm:h-8 sm:w-8";
  const itemCount = JSON.parse(localStorage.getItem("cart"))?.length || 0;
  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

  return (
    <div className="flex items-center gap-8">
      {!isLoggedIn ? (
        <NavButton to="/login">
          <HiMiniUserGroup className={reactIconStyle} />
        </NavButton>
      ) : (
        <NavButton to="/logout">
          <SlLogout className={reactIconStyle} />
        </NavButton>
      )}
      <NavButton to="/cart" className="relative">
        <FaShoppingCart className={reactIconStyle} />
        {itemCount > 0 && (
          <div className="absolute top-5 right-21 bg-red-500 text-white text-xs sm:text-sm font-bold rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
            {itemCount}
          </div>
        )}
      </NavButton>
      <NavButton to="/aboutus">
        <TbFileDescription className={reactIconStyle} />
      </NavButton>
    </div>
  );
}
