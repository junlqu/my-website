"use client";

import { useEffect } from "react";

import LandingAboutMe from "cmp/landing/LandingAboutMe";
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
      <LandingAboutMe />
      <div className="welcome-message-spacer" />
      <div className="welcome-message-spacer" />
      <div className="welcome-message-spacer" />
    </div>
  );
}