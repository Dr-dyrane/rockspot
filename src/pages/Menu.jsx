// src/pages/Menu.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className='flex-1'>
      <h2>Menu</h2>
      <p>Explore our delicious shawarma options!</p>
      <Link to="/">Go back Home</Link> {/* Link to navigate to another screen */}
    </div>
  );
};

export default Menu;
