"use client";

import Link from "next/link";
import { useRef } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

import aboutMe from "json/AboutMe.json";

export default function LandingContact() {
  const outline = aboutMe.Outline;

  const back = useRef();

  const { scrollYProgress } = useScroll({
    target: back,
    offset:["start end", "end start"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest <= 0.05) {
      document.querySelector("#landing-contact-title").classList.add("top-oov");
    }
    else {
      document.querySelector("#landing-contact-title").classList.remove("top-oov");
    }

  });

  return (
    <div id="landing-contact">
      <div ref={back} id="landing-contact-wrapper">
        <Link id="landing-contact-title" href="/contact" className="top-oov">
          <h1>Contact</h1>
        </Link>
        <div id="landing-contact-background">
          <div id="landing-contact-backdrop">
            <div id="landing-contact-details">
              <div id="landing-contact-left">
                <p>Name:</p>
                <p>Based:</p>
                <p>Email:</p>
                <p>Phone:</p>
              </div>
              <div id="landing-contact-right">
                <p>{outline.Name + " (" + outline.Nickname + ")"}</p>
                <p>{outline.Location}</p>
                <p>{outline.Email}</p>
                <p>{outline.Phone}</p>
              </div>
            </div>
            <Resume />
          </div>
        </div>
      </div>
    </div>
  )
}

function Resume() {
  return (
    <div id="landing-contact-resume">
      <Link href="/resume">
        <button>RESUME</button>
      </Link>
    </div>
  )
}