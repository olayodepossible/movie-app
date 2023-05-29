import React, { useRef } from "react";
import "../styles/SignUpPage.css";
import { authentication } from "../firebase";

const SignUpPage = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    authentication
      .createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
      .then((authUser) => {})
      .catch((error) => alert(error.message));
  };

  const signin = (e) => {
    e.preventDefault();
    authentication
      .signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
      .then((authUser) => {})
      .catch((error) => alert(error.message));
  };
  return (
    <div className="signupPage">
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email" ref={emailRef} />
        <input type="password" placeholder="Password" ref={passwordRef} />
        <button type="submit" onClick={signin()}>
          Sign In
        </button>

        <h4>
          <span className="signupPage__gray">New to Netflix? </span>
          <span className="signupPage__link" onClick={register()}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignUpPage;
