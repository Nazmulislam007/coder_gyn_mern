import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "22px",
    fontWeight: "bold",
  };

  return (
    <>
      <nav className={`container ${styles.navbar}`}>
        <Link style={linkStyle} to="/">
          NazmuL
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
