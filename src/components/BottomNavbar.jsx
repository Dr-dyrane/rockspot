// src/components/BottomNavbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineSearch, AiOutlineShopping, AiOutlineQuestionCircle, AiOutlineUser } from 'react-icons/ai';

const navItems = [
  { icon: <AiOutlineHome size={24} />, text: "Home", to: "/" },
  { icon: <AiOutlineSearch size={24} />, text: "Search", to: "/search" },
  { icon: <AiOutlineShopping size={24} />, text: "Orders", to: "/orders" },
  { icon: <AiOutlineQuestionCircle size={24} />, text: "Support", to: "/support" },
  { icon: <AiOutlineUser size={24} />, text: "Profile", to: "/profile" },
];

const BottomNavbar = () => {
  return (
    <nav className="bg-white border-t border-slate-200 fixed bottom-0 left-0 right-0 flex justify-around py-2">
      {navItems.map((item) => (
        <Link key={item.to} to={item.to} className="flex flex-col items-center text-indigo-700">
          {item.icon}
          <span className="text-xs mt-1">{item.text}</span>
        </Link>
      ))}
    </nav>
  );
};

export default BottomNavbar;
