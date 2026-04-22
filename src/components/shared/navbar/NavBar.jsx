import { ChartLine, ChevronDown, Clock, House } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router";

const NavBar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `font-semibold mr-1 ${isActive ? "bg-green-800 border text-white" : ""}`
          }
        >
          <House />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/books"}
          className={({ isActive }) =>
            `font-semibold mr-1 ${isActive ? "bg-green-800 border text-white" : ""}`
          }
        >
          <Clock />
          Timeline
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/page-to-read"}
          className={({ isActive }) =>
            `font-semibold mr-1 ${isActive ? "bg-green-800 border text-white" : ""}`
          }
        >
          <ChartLine />
          Stats
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100  mx-auto container">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <h2 className="font-bold text-black text-4xl">
            Keen<span className="text-green-900">Keeper</span>
          </h2>
        </div>
        <div className="navbar-end gap-3">
          <ul className="menu menu-horizontal px-1 hidden md:flex">{links}</ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;