import React from "react";
import AdminPanel from "./Admin/Panel/AdminPanel.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Admin/Home/Home.jsx";
import { CustomerProvider } from "./Admin/AdminContext/AdminContext";
import { HomeProvider } from "./Admin/Home/HomeContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <HomeProvider>
        <Home />
      </HomeProvider>
    ),
  },
  {
    path: "/admin",
    element: (
      <CustomerProvider>
        <AdminPanel />
      </CustomerProvider>
    ),
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
