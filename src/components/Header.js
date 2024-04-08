import React from "react";
import "../css/header.css";
import Form from "./Form";
export default function Header() {
  return (
    <header>
      <div>
        <div className="logo-div">
          <img src={require("../img/kira.jpg")} alt="logo" className="logo" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
