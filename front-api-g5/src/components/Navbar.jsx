import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-6">
      <div className="container flex justify-between mx-auto">
        <Link to="/" className="text-white text-xl font-bold">
          Streaming
        </Link>
        <ul className="flex">
          <li className="ml-6">
            <Link to="/series" className="text-white">
              Series
            </Link>
          </li>
          <li className="ml-6">
            <Link to="/movies" className="text-white">
              Películas
            </Link>
          </li>
          <li className="ml-6">
            <Link to="/favoritos" className="text-white">
              Favoritos
            </Link>
          </li>
          <li className="ml-6">
            <Link to="/cuenta" className="text-white">
              Mi Cuenta
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
