// src/pages/Home.jsx
import React from "react";

const Home = () => {
  return (
    <div className="p-4 flex flex-col items-center justify-center">
      <h2>Welcome to Rockspot Shawarma!</h2>
      <img src='/logo.png' className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64" alt="Logo"/>
      <p>Discover the flavors that will spice up your moment.</p>
    </div>
  );
};

export default Home;
