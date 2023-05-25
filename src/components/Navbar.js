import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
const Navbar = () => {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    window.scrollY > 100 ? handleShow(true) : handleShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img className="nav__logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="logo" />
        <img
          className="nav__avatar"
          src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwonder-day.com%2Fwp-content%2Fuploads%2F2023%2F03%2Fwonder-day-avatar-smiley-41.png&tbnid=x4emoJRDR_GzlM&vet=10CE0QMyjtAWoXChMIiPj6gtKR_wIVAAAAAB0AAAAAEAQ..i&imgrefurl=https%3A%2F%2Fwonder-day.com%2Fen%2Femoticon-smiley-avatar%2F&docid=dFCIo1uIQVbnLM&w=1024&h=1024&q=smiley%20face%20avarta&ved=0CE0QMyjtAWoXChMIiPj6gtKR_wIVAAAAAB0AAAAAEAQ"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Navbar;
