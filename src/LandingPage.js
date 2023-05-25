import React from "react";
import "./styles/LandingPage.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

export const LandingPage = () => {
  return (
    <div className="home">
      <Navbar />
      <Banner />
    </div>
  );
};
