import React from "react";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="md:w-2/5 xl:w-1/5 bg-gray-800">
      <div className="p-6">
        <p className="uppercase text-white text-2xl tracking-wide font-bold">
          Restaurant App
        </p>
        <p className="mt-3 text-gray-600">
          Administra tu restaurant con las siguientes opciones
        </p>
        <nav className="mt-10">
          <NavLink
            className={(navData) =>
              navData.isActive
                ? "text-yellow-500 p-1"
                : "p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900"
            }
            to="/menu"
          >
            Menu
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? "text-yellow-500 p-1"
                : "p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900"
            }
            to="/"
          >
            Ordenes
          </NavLink>
        </nav>
      </div>
    </div>
  );
};
