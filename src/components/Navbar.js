import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/details"> Details </Link>
        <Link to="/login"> Login </Link>
        <Link to="/register"> Register </Link>
      </div>
    </div>
  );
};