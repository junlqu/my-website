"use client";

import { useLayoutEffect } from "react";

export default function GetTheme() {
  useLayoutEffect(() => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "light");
    }

    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");

      document.querySelectorAll(".theme-toggle").forEach((el) => {
        el.checked = true;
      });
    }
    else {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
    }
  }, []);

  return (<></>);
}