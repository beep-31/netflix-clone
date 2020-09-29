import React, { useEffect, useState } from "react";
import Logo from "./img/Netflix.png";
import User from "./img/User.png";
import "./Navbar.css";

function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <nav className={`nav ${show && "nav--black"}`}>
      <div className="nav__logo">
        <img src={Logo} alt="Netflix" />
      </div>
      <div className="nav__user">
        <img src={User} alt="user" />
      </div>
    </nav>
  );
}

export default Navbar;
