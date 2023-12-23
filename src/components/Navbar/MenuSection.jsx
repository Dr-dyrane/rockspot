// MenuSection.js
import React from "react";
import Menu from "./Menu";

const MenuSection = ({ isMenuOpen, toggleMenu, menuRef, menuItems }) => {
  return (
    <div>
      <button
        data-collapse-toggle="navbar-cta"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-500 rounded-lg md:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:text-slate-400 dark:hover:bg-slate-700 dark:focus:ring-slate-600"
        aria-controls="navbar-cta"
        aria-expanded="false"
        onClick={toggleMenu}
      >
        <span className="sr-only">Open main menu</span>
        {isMenuOpen ? (
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        ) : (
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>
      <div
        className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
          isMenuOpen ? "block" : "hidden"
        }`}
        id="navbar-cta"
        ref={menuRef}
      >
        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-slate-100 rounded-lg bg-slate-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-slate-800 md:dark:bg-slate-900 dark:border-slate-700">
          {menuItems.map((item) => (
            <Menu key={item.to} to={item.to} label={item.label} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuSection;
