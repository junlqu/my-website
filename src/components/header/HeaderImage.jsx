"use client";

import Link from "next/link";
import { useEffect } from "react";

import { MainHeaderNavLeft, MainHeaderNavRight } from "./MainHeaderNavigation";
import Logo from "@/public/logo.jsx";

export default function HeaderImage() {
  useEffect(() => {
    if (!window.matchMedia("(any-hover: hover)").matches) {
      document.querySelectorAll(".main-header-nav-wrapper").forEach((el) => {
        el.classList.add("nocursor");
      });
      document.querySelectorAll(".main-header-nav").forEach((el) => {
        el.classList.remove("hidden-right", "hidden-left");
      });
    }
  });

  return (
    <div id="main-header-image-wrapper">
      <MainHeaderNavLeft />
      <div className="header-spacer"></div>
      <MainHeaderNavRight />
      <Link id="main-header-center" className="header-content" href="/">
        <Logo id="main-header-image" href="/" />
      </Link>
    </div>
  );
}