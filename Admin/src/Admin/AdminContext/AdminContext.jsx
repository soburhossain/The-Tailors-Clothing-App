import axios from "axios";
import { createContext, useEffect, useState } from "react";
const customerContext = createContext();
const CustomerProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [expandedOrder, setExpandedOrder] = useState(null);
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const result = await axios.get(
          "http://localhost:8000/api/customer/orders"
        );
        setOrders(result.data);
      } catch (error) {
        console.error("Error fetching orders", error);
      }
    };

    fetchOrders();
  }, []);

  // Handle expanding/collapsing an order
  const toggleOrderDetails = (orderId) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  // Calculate total price of an order
  const calculateOrderTotal = (order) => {
    return order.products.reduce(
      (total, product) => total + product.totalPrice,
      0
    );
  };

  return (
    <customerContext.Provider
      value={{
        orders,
        setOrders,
        expandedOrder,
        setExpandedOrder,
        toggleOrderDetails,
        calculateOrderTotal,
      }}
    >
      {children}
    </customerContext.Provider>
  );
};

export { customerContext, CustomerProvider };
