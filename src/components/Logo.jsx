import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ disabled }) => {
  const logoContent = (
    <>
      <img
        src="/logo_i.png"
        className="h-8 rounded-full bg-indigo-700 p-[1px]"
        alt="Rockspot Logo"
      />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-slate-100">
        Rockspot™
      </span>
    </>
  );

  return disabled ? (
    <div className="flex items-center space-x-3 rtl:space-x-reverse">
      {logoContent}
    </div>
  ) : (
    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      {logoContent}
    </Link>
  );
};

export default Logo;
