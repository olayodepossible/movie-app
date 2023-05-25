import React from "react";
import "../styles/Banner.css";

const Banner = () => {
  const truncateString = (string, num) => (string?.length ? string.substr(0, num - 1) + "..." : string);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://i.imgur.com/e1hLQ2m.png")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">{truncateString("Description", 4)}</h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
