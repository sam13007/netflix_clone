import React, { useEffect, useState } from "react";
import netflix from "../assets/netflix_logo.png";
import avatar from "../assets/Netflix-avatar.png";
import "./Nav.css";

function Nav() {
  const [black, setBlack] = useState(false);

  const transitionNav = () => {
    if (window.scrollY > 100) {
      setBlack(true);
    } else {
      setBlack(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNav);
    return () => window.removeEventListener("scroll", transitionNav);
  }, []);

  return (
    <div className={`nav ${black ? "nav_black" : null}`}>
      <div className="nav_content">
        <img src={netflix} alt="logo" className="nav_logo" />
        <img src={avatar} alt="avatar" className="nav_avatar" />
      </div>
    </div>
  );
}

export default Nav;
