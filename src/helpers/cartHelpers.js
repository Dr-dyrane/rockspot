// src/helpers/cartHelpers.js
import cartData from "../data/cartData";
import ordersData from "../data/ordersData";

// Helper function to create an order from a cart item
const createOrderFromCartItem = (cartItem) => {
	// You can implement logic here to determine spiciness, ketchup, barma, hotdog options
	// based on the category and user preferences
	const defaultOptions = {
		spiciness: "normal",
		ketchup: "normal",
		barma: "normal",
		hotdog: false,
		hotdogQuantity: 0,
	};

	return {
		name: `${cartItem.name} - ${cartItem.id}`,
		featureItem: cartItem,
		category: cartItem.categoryIds.includes(5) ? "spicy" : "non-spicy", // Assuming category 5 is spicy
		options: { ...defaultOptions },
	};
};

// Add item to cart
export const addToCart = (item) => {
	const existingItem = cartData?.find((cartItem) => cartItem.id === item.id);

	if (existingItem) {
		// Item already in cart, increment quantity
		existingItem.quantity = (existingItem.quantity || 0) + 1;
	} else {
		// Add item to cart with quantity 1
		cartData.push({ ...item, quantity: 1 });

		// Create an order and add it to ordersData
		const newOrder = createOrderFromCartItem(item);
		ordersData.push(newOrder);
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

			// Remove the corresponding order from ordersData
			const orderIndex = ordersData.findIndex(
				(order) => order.featureItem.id === itemId
			);
			if (orderIndex !== -1) {
				ordersData.splice(orderIndex, 1);
			}
		}
	}
};

// Get cart items
export const getCartItems = () => {
	return cartData;
};

// Get order items
export const getOrderItems = () => {
	return ordersData;
};
