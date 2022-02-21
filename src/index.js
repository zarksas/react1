import ReactDOM from "react-dom";
import React from "react";
import logo from "./mem.png";
import "./index.css";

// eslint-disable-next-line no-undef
ReactDOM.render(
  <>
    <div className="header">
      <h2>Люди не смогут тебя использовать, если ты бесполезный</h2>
      <img src={logo} alt="No" />
    </div>
    <div className="main">
      <ul className="menuBar">
        <li>Главная</li>
        <li>Контакты</li>
        <li>О нас</li>
        <li>Бакъ бел хьокхам</li>
      </ul>
    </div>
  </>,

  document.getElementById("root")
);
