import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/about">About</Link> |{" "}
        <Link to="/home">Home</Link>
        <Link to="/mealdata">Meal Data</Link>
      </nav>
        </div>
    );
};

export default Navbar;