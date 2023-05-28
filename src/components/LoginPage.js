import React from "react";
import "../styles/LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login">
      <div className="login__background">
        <img className="login__logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
        <button className="login__button">Sign In</button>
        <div className="login__gradient" />
      </div>
      <div className="login_body">
        <>
          <h1>Unlimited films, TV programmes and more ...</h1>
          <h2>Watch anywhere. Cancel at any time</h2>
          <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
        </>
      </div>
    </div>
  );
};

export default LoginPage;
