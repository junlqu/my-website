"use client";

import { useEffect } from "react";

import LightTheme from "../../public/theme-light.jsx" ;
import DarkTheme from "../../public/theme-dark.jsx";

export default function ThemeChangeButton(props) {
  const id1 = "theme-toggle-" + props.idx;
  const id2 = "theme-toggle-button-" + props.idx;
    
  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "light");
    }

    if (localStorage.getItem("theme") === "dark") {
      
    }
  });

  return (
    <div className={props.className}>
      <input type="checkbox" id={id1} className="theme-toggle" />
      <label id={id2} className="theme-toggle-button" htmlFor={id1} onClick={() => change(props.idx)}>
        <LightTheme className="light-theme-icon theme-icon" width={24} height={24} alt="Light theme" />
        <DarkTheme className="dark-theme-icon theme-icon" width={24} height={24} alt="Dark theme" />
      </label>
    </div>
  );
}

function change(sfx) {
  // Toggles the theme
  document.body.classList.toggle("dark-theme");
  document.body.classList.toggle("light-theme");

  // Activates the other button
  const suffix = sfx == "header" ? "hamburger" : "header"
  const themeToggleOther = document.querySelector("#theme-toggle-" + suffix);
  themeToggleOther.checked = !themeToggleOther.checked;

  // Saves the theme to local storage
  if (localStorage.getItem("theme") === "dark") {
    localStorage.setItem("theme", "light");
  }
  else if (localStorage.getItem("theme") === "light") {
    localStorage.setItem("theme", "dark");
  }
}