// src/components/OngoingOrders.jsx
import React from "react";
import CartItem from "./CartItem";

const OngoingOrders = ({ cartItems }) => {
  return (
    <div>
      {cartItems.length === 0 ? (
        <p>Your ongoing orders are empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default OngoingOrders;
