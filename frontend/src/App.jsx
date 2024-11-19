import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./features/Home/Home.jsx";
import Shop from "./features/Shop/Shop.jsx";
import Tshirts from "./components/Tshirts.jsx";
import Shirts from "./components/Shirts.jsx";
import Pants from "./components/Pants.jsx";
import ProductDetails from "./features/Productdetails/ProductDetails.jsx";
import Cart from "./features/Cart/Cart.jsx";
import CreateOrder from "./features/Order/CreateOrder.jsx";
import OrderStatus from "./features/Order/OrderStatus.jsx";
import About from "./features/About/About.jsx";
import Signup from "./features/Signup/SignUp.jsx";
import Login from "./features/Login/Login.jsx";
import LogOut from "./features/LogOut/LogOut.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/orderstatus",
    element: <OrderStatus />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/logout",
    element: <LogOut />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/aboutus",
    element: <About />,
  },
  {
    path: "/createOrder",
    element: <CreateOrder />,
  },
  {
    path: "/productDetails",
    element: <ProductDetails />,
  },

  {
    path: "/shop",
    element: <Shop />,
    children: [
      {
        index: true,
        element: <Tshirts />,
      },
      {
        path: "t-shirts",
        element: <Tshirts />,
      },
      {
        path: "pants",
        element: <Pants />,
      },
      {
        path: "shirts",
        element: <Shirts />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
