// src/helpers/cartHelpers.js
import cartData from "../data/cartData";

// Add item to cart
export const addToCart = (item) => {
  const existingItemIndex = cartData.findIndex((cartItem) => cartItem.id === item.id);

  if (existingItemIndex !== -1) {
    // Item already in cart, increment quantity
    cartData[existingItemIndex].quantity += 1;
  } else {
    // Add item to cart with quantity 1
    cartData.push({ ...item, quantity: 1 });
  }
};

// Remove item from cart
export const removeFromCart = (itemId) => {
  const itemIndex = cartData.findIndex((item) => item.id === itemId);

  if (itemIndex !== -1) {
    // Remove item from cart
    cartData.splice(itemIndex, 1);
  }
};

// Get cart items
export const getCartItems = () => {
  return cartData;
};
