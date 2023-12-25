// src/helpers/cartHelpers.js
import cartData from "../data/cartData";

// Add item to cart
export const addToCart = (item) => {
  const existingItem  = cartData?.find((cartItem) => cartItem.id === item.id);

  if (existingItem) {
    // Item already in cart, increment quantity
    existingItem.quantity = (existingItem.quantity || 0) + 1;
  } else {
    // Add item to cart with quantity 1
    cartData.push({ ...item, quantity: 1 });
  }
};

// Remove item from cart
export const removeFromCart = (itemId) => {
  const itemIndex = cartData?.findIndex((item) => item.id === itemId);

  if (itemIndex !== -1) {
    // Remove one item from cart
    if (cartData[itemIndex].quantity > 1) {
      cartData[itemIndex].quantity -= 1;
    } else {
      // If quantity is 1, completely remove the item
      cartData.splice(itemIndex, 1);
    }
  }
};

// Get cart items
export const getCartItems = () => {
  return cartData;
};
