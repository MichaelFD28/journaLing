import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="title">
        <h1>My Journal...</h1>
      </div>
      <div className="auth">
        <button className="std-btn">Log In</button>
        <button className="std-btn">Sign Up</button>
      </div>
    </div>
  );
}
