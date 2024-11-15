"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { useScroll, useTransform, motion, useMotionValueEvent } from "framer-motion";

import ProjectsComponent from "../ProjectsComponent";

import projects from "json/Projects.json";

export default function LandingProjects() {
  const back = useRef();

  const { scrollYProgress } = useScroll({
    target: back,
    offset:["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, .5], [100, 500]);
  const yt = useTransform(scrollYProgress, [0, .3], [200, -1000]);

  return (
    <div ref={back} id="landing-projects-wrapper" className="wrapper">
      <motion.div id="landing-projects-background" style={{y}}/>
      <Title y={yt} />
      <Carousel />
    </div>
  )
}

function Title({y=0}) {
  return (
    <motion.h1 id="landing-projects-title" style={{y}}>
      <Link href="/projects">Projects</Link>
    </motion.h1>
  );
}

function Carousel() {
  const [proj, setProj] = useState(1);

  function tweenProj(side) {
    const len = Object.keys(projects).length;
    const cproj = proj + side > len ? 1 : proj + side <= 0 ? len : proj + side;
    setProj(cproj);
  }

  return (
    <div id="landing-projects-carousel">
      <button id="landing-projects-left" onClick={() => tweenProj(-1)}>{"<"}</button>
      {
        Object.keys(projects).map((key) => 
          <ProjectsComponent key={key} json={key} shown={proj} />
        )
      }
      <button id="landing-projects-right" onClick={() => tweenProj(1)}>{">"}</button>
    </div>
  );
}