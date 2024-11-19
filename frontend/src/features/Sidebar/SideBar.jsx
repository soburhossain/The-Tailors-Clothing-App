import React from "react";
import { Link } from "react-router-dom";
export default function SideBar() {
  const style = "hover:text-yellow-400  text-lg";
  return (
    <div className="w-[30%] md:w-[20%] lg:w-[20%] xl:w-[20%] 2xl:w-[20%] bg-gray-900 text-yellow-500 opacity-95">
      <ul className="flex flex-col items-center justify-center h-full gap-7">
        <Link className={style} to="/shop/t-shirts">
          T-Shirt
        </Link>
        <Link className={style} to="/shop/pants">
          Pants
        </Link>
        <Link className={style} to="/shop/shirts">
          Shirt
        </Link>
      </ul>
    </div>
  );
}
