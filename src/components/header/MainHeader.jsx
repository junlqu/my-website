"use client";

import { useCallback, useEffect, useState } from "react";

import HeaderImage from "./HeaderImage";
import Hamburger from "./Hamburger";

export default function MainHeader() {
  const [scrollState, setScrollState] = useState(0);

  const onScrollup = useCallback(() => {
    const scrollY = window.scrollY || window.pageYOffset;
    setScrollState(scrollY);
    // If upscroll is detected, show the header
    if (scrollY < scrollState) {
      document.querySelector("#main-header").style = "top: 0;";
    }
    // If downscroll is detected, hide the header
    else if (scrollY > scrollState) {
      document.querySelector("#main-header").style = "top: -80px;";
    }
  });

  useEffect(() => {
    setScrollState(window.scrollY || window.pageYOffset);

    window.addEventListener("scroll", onScrollup, {passive: true});

    return () => {
      window.removeEventListener("scroll", onScrollup, {passive: true});
    };
  }, [scrollState]);

  return (
    <header id="main-header" className="header scroll-fix wrapper">
      <Hamburger />
      <HeaderImage />
    </header>
  );
}