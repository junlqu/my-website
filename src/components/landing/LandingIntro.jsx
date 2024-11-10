"use client";

import { useState, useRef, useEffect } from "react";

import TypeOut from "./TypeOut";

export default function LandingIntro() {
  const [op, setOp] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem("mouseTrail")) {
      localStorage.setItem("mouseTrail", true);
    }
    setOp(localStorage.getItem("mouseTrail") === "true");
  }, []);

  function opToggle() {
    localStorage.setItem("mouseTrail", !op);
    setOp(op => !op);
  }

  const back = useRef();
  const fore = useRef();

  function moveCursor(e) {
    // Get the x and y coordinates of the mouse
    const { clientX, clientY } = e;
    const pos = back.current.getBoundingClientRect();
    const x = clientX - pos.x;
    const y = clientY - pos.y;
    fore.current.style.left = `${x}px`;
    fore.current.style.top = `${y}px`;
    
    // Create a trail of the cursor
    const trail = document.createElement("div");
    trail.classList.add("cursor-background");
    trail.style.left = `${x}px`;
    trail.style.top = `${y}px`;
    back.current.appendChild(trail);

    // Remove the trail after 1 second or after 500 additions
    setTimeout(() => {
      trail.remove();
    }, 3000);
  }

  return  (
    <>
      <div className="intro-header">
        <TypeOut />
        <p id="toggle-mouse-trail" onClick={opToggle}>{op ? "TRAIL ON" : "TRAIL OFF"}</p>
        <div ref={back} className="cursor-background-wrapper" onMouseMove={op ? (e) => moveCursor(e) : null}>
          <div ref={fore} className="noshow" />
        </div>
      </div>
    </>
  )
}