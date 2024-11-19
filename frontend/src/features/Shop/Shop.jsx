import React from "react";
import NavBar from "../../ui/NavBar.jsx";
import SideBar from "../../features/Sidebar/SideBar.jsx";
import { Outlet } from "react-router-dom";
export default function Shop() {
  return (
    <div className="grid grid-rows-[1fr_10fr] max-h-[100vh]">
      <NavBar type="bg-gray" />
      <div className=" flex flex-row max-w-[100vw] overflow-y-scroll gap-[3vw]">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
}
