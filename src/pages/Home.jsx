// src/pages/Home.jsx
import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className="flex-1">
			<img src='/logo.png'/>
			<h2>Welcome to Rockspot Shawarma!</h2>
			<p>Discover the flavors that will spice up your moment.</p>
            <Link to="/menu">Go to Menu</Link> {/* Link to navigate to another screen */}
		</div>
	);
};

export default Home;
