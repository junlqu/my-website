"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { MainHeaderNavLeft, MainHeaderNavRight } from "./MainHeaderNavigation";

export default function HeaderImage() {
  useEffect(() => {
    if (!window.matchMedia("(any-hover: hover)").matches) {
      document.querySelectorAll(".main-header-nav-wrapper").forEach((el) => {
        el.classList.remove("nowidth");
      });
      document.querySelectorAll(".main-header-nav").forEach((el) => {
        el.classList.remove("hidden-right", "hidden-left");
      });
    }
  });

  return (
    <Link id="main-header-image-wrapper" href="/">
      <MainHeaderNavLeft />
      <Image id="main-header-image" src="/temp.png" width={64} height={64} alt="JLQ" className="header-content" />
      <MainHeaderNavRight />
    </Link>
  );
}