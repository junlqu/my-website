"use client";

import { useEffect } from "react";

import AboutMe from "cmp/landing/AboutMe";
import LandingIntro from "cmp/landing/LandingIntro";
import LandingParallax from "cmp/landing/LandingParallax";

export default function Main() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  }, []);

  return (
    <div id="main" className="wrapper">
      <LandingIntro />
      <LandingParallax />
      <AboutMe />
      <div className="welcome-message-spacer" />
      <div className="welcome-message-spacer" />
      <div className="welcome-message-spacer" />
    </div>
  );
}