"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

import { MainHeaderNavLeft, MainHeaderNavRight } from "./MainHeaderNavigation";

export default function HeaderImage() {
  useEffect(() => {
    if (!window.matchMedia("(any-hover: hover)").matches) {
      document.querySelectorAll(".main-header-nav-wrapper").forEach((el) => {
        el.style.width = "256px";
      });
      document.querySelectorAll(".main-header-nav").forEach((el) => {
        el.classList.remove("hidden-right", "hidden-left");
      });
    }
  });

  return (
    <div id="main-header-image-wrapper">
      <MainHeaderNavLeft />
      <Link className="header-content" href="/">
        <Image id="main-header-image" src="/temp.png" width={64} height={64} alt="JLQ" href="/" />
      </Link>
      <MainHeaderNavRight />
    </div>
  );
}