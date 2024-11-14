"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion, useMotionValueEvent } from "framer-motion";

export default function LandingParallax() {
  const back = useRef();
  const { scrollYProgress } = useScroll({
    target: back,
    offset:["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, .95], [0, 500]);
  const y1 = useTransform(scrollYProgress, [0, 0.95], [200, 1200]);
  const y2 = useTransform(scrollYProgress, [0, 0.95], [600, 1200]);
  const y3 = useTransform(scrollYProgress, [0, 0.95], [1000, 1200]);
  const y4 = useTransform(scrollYProgress, [0, 0.95], [1400, 1200]);
  const y5 = useTransform(scrollYProgress, [0, 0.95], [1800, 1200]);
  const y6 = useTransform(scrollYProgress, [0, 0.95], [2200, 1200]);
  const y7 = useTransform(scrollYProgress, [0, 0.95], [2600, 1200]);
  const yd = useTransform(scrollYProgress, [0, 0.95], [550, 1150]);
  const xd = useTransform(scrollYProgress, [0, 0.95], [-600, 0]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // For refreshing the page
    if (latest <= 0.1) {
      document.querySelectorAll(".welcome-message-characters").forEach((el) => {
        el.classList.add("noshow");
      });
    }
    else {
      document.querySelectorAll(".welcome-message-characters").forEach((el) => {
        el.classList.remove("noshow");
      });
    }

    // For showing the last message
    if (latest >= 0.95) {
      document.querySelector("#welcome-message-last").classList.remove("noshow");
    }
    else {
      document.querySelector("#welcome-message-last").classList.add("noshow");
    }
  });

  return (
    <div id="welcome-message">
      <div ref={back} id="welcome-message-wrapper">
        <motion.div id="welcome-message-background" style={{y}}/>
        <MotionDecal y={yd} x={xd}/>
        <MotionChar char="W" y={y1}/>
        <MotionChar char="E" y={y2}/>
        <MotionChar char="L" y={y3}/>
        <MotionChar char="C" y={y4}/>
        <MotionChar char="O" y={y5}/>
        <MotionChar char="M" y={y6}/>
        <MotionChar char="E" y={y7}/>
        <h2 id="welcome-message-last" className="noshow">to my website</h2>
      </div>
      <div className="welcome-message-spacer" />
    </div>
  )
}

function MotionChar({char, y=0}) {
  return (
    <motion.div className="welcome-message-characters noshow" style={{y}}>
      <h1>{char}</h1>
    </motion.div>
  )
}

function MotionDecal({y=0, x=0}) {
  return (
    <motion.div className="welcome-message-decal" style={{y, x}}/>
  )
}