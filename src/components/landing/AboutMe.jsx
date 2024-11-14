"use client";

import Link from "next/link";
import { useRef } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

import aboutMe from "json/AboutMe.json";

export default function AboutMe() {
  const outline = aboutMe.Outline;
  const details = aboutMe.Details.Short;

  const back = useRef();

  const { scrollYProgress } = useScroll({
    target: back,
    offset:["start end", "end start"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest <= 0.05) {
      document.querySelector("#landing-aboutme-title").classList.add("top-oov");
    }
    else {
      document.querySelector("#landing-aboutme-title").classList.remove("top-oov");
    }

  });

  return (
    <div id="landing-aboutme">
      <div ref={back} id="landing-aboutme-wrapper">
        <Link id="landing-aboutme-title" href="/aboutme" className="top-oov">
          <h1>About Me</h1>
        </Link>
        <div id="landing-aboutme-details">
          <div id="landing-aboutme-accent1" className="landing-aboutme-accent"/>
          <div id="landing-aboutme-accent2" className="landing-aboutme-accent"/>
          <div id="landing-aboutme-background">
            <div id="landing-aboutme-picture" />
            {
              details.map((detail, index) => (
                <p key={index} className="landing-aboutme-text">{detail}</p>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}