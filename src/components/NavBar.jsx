import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-black text-white px-2 py-4 lg:py-7 lg:px-12">
      <div className="flex justify-between items-center">
        <Link className="text-4xl lg:text-5xl hover:text-blue-400 font-cursive" to="/">Galaxy</Link>
        <div className="flex flex-row">
          <Link className="hover:text-blue-500 text-sm lg:text-lg" to="/">Home</Link>
          <Link className="hover:text-blue-500 text-sm lg:text-lg ml-2 lg:ml-4" to="/services">Services</Link>
          <Link className="hover:text-blue-500 text-sm lg:text-lg ml-2 lg:ml-4" to="/about">About Us</Link>
          <Link className="hover:text-blue-500 text-sm lg:text-lg ml-2 lg:ml-4" to="/contact">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
}
