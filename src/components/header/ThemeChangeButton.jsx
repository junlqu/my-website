"use client";

import * as React from "react";

import LightTheme from "../../public/theme-light.jsx" ;
import DarkTheme from "../../public/theme-dark.jsx";

export default function ThemeChangeButton(props) {
  return (
    <div className={props.className}>
      <input type="checkbox" id="theme-toggle" />
      <label id="theme-toggle-button" htmlFor="theme-toggle" onClick={change}>
        <LightTheme className="light-theme-icon theme-icon" width={24} height={24} alt="Light theme" />
        <DarkTheme className="dark-theme-icon theme-icon" width={24} height={24} alt="Dark theme" />
      </label>
    </div>
  );
}

function change() {
  document.body.classList.toggle("dark-theme");
  document.body.classList.toggle("light-theme");

  if (localStorage.getItem("theme") === "dark") {
    localStorage.setItem("theme", "light");
  }
  else if (localStorage.getItem("theme") === "light") {
    localStorage.setItem("theme", "dark");
  }
}