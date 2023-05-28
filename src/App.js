import React from "react";
import { LandingPage } from "./LandingPage";
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";

function App() {
  const user = null;
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
