import React, { useContext } from "react";
import { customerContext } from "../AdminContext/AdminContext.jsx";
import OrderImageHeader from "../../Components/OrderImageHeader.jsx";
import CustomerDetails from "../Customer/CustomerDetails.jsx";
import ToggleButton from "../../Components/ToggleButton.jsx";
import OrderDetails from "../../Components/OrderDetails.jsx";
import PanelHeading from "../../Components/PanelHeading.jsx";
const AdminPanel = () => {
  const { orders, expandedOrder } = useContext(customerContext);
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <PanelHeading />
      {orders.length === 0 ? (
        <div className="text-center text-gray-500">
          <p>No orders have been added yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <OrderImageHeader order={order} />

              <div className="p-6">
                <CustomerDetails order={order} />
                <ToggleButton order={order} />
                {expandedOrder === order._id && <OrderDetails order={order} />}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
