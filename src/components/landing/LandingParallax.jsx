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
  const y1 = useTransform(scrollYProgress, [0, 0.95], [0, 1200]);
  const y2 = useTransform(scrollYProgress, [0, 0.95], [400, 1200]);
  const y3 = useTransform(scrollYProgress, [0, 0.95], [800, 1200]);
  const y4 = useTransform(scrollYProgress, [0, 0.95], [1200, 1200]);
  const y5 = useTransform(scrollYProgress, [0, 0.95], [1600, 1200]);
  const y6 = useTransform(scrollYProgress, [0, 0.95], [2000, 1200]);
  const y7 = useTransform(scrollYProgress, [0, 0.95], [2400, 1200]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0.95) document.querySelector("#welcome-message-last").classList.remove("noshow");
    else document.querySelector("#welcome-message-last").classList.add("noshow");
  });

  return (
    <div id="welcome-message">
      <div ref={back} id="welcome-message-wrapper">
        <motion.div id="welcome-message-background" style={{y}}/>
        <MotionChar char="W" y={y1}/>
        <MotionChar char="E" y={y2}/>
        <MotionChar char="L" y={y3}/>
        <MotionChar char="C" y={y4}/>
        <MotionChar char="O" y={y5}/>
        <MotionChar char="M" y={y6}/>
        <MotionChar char="E" y={y7}/>
        <h2 id="welcome-message-last" class="noshow">to my website</h2>
      </div>
      <div className="welcome-message-spacer" />
    </div>
  )
}

function MotionChar({char, y=0}) {
  return (
    <motion.div className="welcome-message-characters" style={{y}}>
      <h1>{char}</h1>
    </motion.div>
  )
} 