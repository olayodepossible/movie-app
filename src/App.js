import React, { useEffect } from "react";
import { LandingPage } from "./LandingPage";
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import { authentication } from "./firebase";
import { useDispatch } from "react-redux";
import { login, logout } from "./features/user/userSlice";

function App() {
  const user = null;
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = authentication.onAuthStateChanged((userAuth) => {
      userAuth ? dispatch(login({ uid: userAuth.uid, email: userAuth.email })) : dispatch(logout);
    });

    return unsubscribe;
  }, []);

  return (
    <div className="app">
      {!user ? (
        <LoginPage />
      ) : (
        <Router>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
