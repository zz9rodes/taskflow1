import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav style={{
    background: "#1976d2",
    color: "#fff",
    padding: "1rem 2rem",
    marginBottom: "2rem",
    display: "flex",
    alignItems: "center"
  }}>
    <Link to="/" style={{ color: "#fff", textDecoration: "none", fontWeight: 600, fontSize: "1.3rem" }}>
      TaskFlow
    </Link>
  </nav>
);

export default Navbar;
