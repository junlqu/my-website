"use client";

import { useRef } from "react";

import TypeOut from "./TypeOut";

export default function LandingIntro() {
  const back = useRef();
  const fore = useRef();

  const moveCursor = (e) => {
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
        <div ref={back} className="cursor-background-wrapper" onMouseMove={(e) => {moveCursor(e)}}>
          <div ref={fore} className="cursor-background noshow" />
        </div>
      </div>
    </>
  )
}