// src/components/CompletedOrders.jsx
import React from "react";
import CartItem from "./CartItem";

const CompletedOrders = ({ cartItems }) => {
  // Assuming you have a way to determine completed orders
  const completedOrders = cartItems.filter((item) => item.completed);

  return (
    <div>
      {completedOrders.length === 0 ? (
        <p>You have no completed orders.</p>
      ) : (
        <div>
          {completedOrders.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CompletedOrders;
