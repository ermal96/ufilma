import React from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../../routes";

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <img
            className="h-8 w-8"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
            alt="Workflow"
          />
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            <NavLink
              to={routes.home}
              className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </NavLink>
            <NavLink
              to={routes.admin}
              className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Admin
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
