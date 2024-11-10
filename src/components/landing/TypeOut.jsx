"use client";

import { useEffect, useRef } from "react";

export default function TypeOut() {
  const title = "Hello world.";
  const subtitle = "This is Jun.";

  const text1 = useRef();
  const text2 = useRef();

  useEffect(() => {
    setTimeout(() => {
      for (let i = 0; i <= title.length; i++) {
        setTimeout(() => {
          if (text1.current === null) return;
          text1.current.textContent = title.slice(0, i);
        }, 100 * i);
      }
    
      for (let i = 0; i <= subtitle.length; i++) {
        setTimeout(() => {
          if (text1.current === null) return;
          text2.current.textContent = subtitle.slice(0, i);
        }, 100 * (i + title.length + 5));
      }
    }, 1000);
  }, []);

  return (
    <div className="intro-text">
      <h1 ref={text1}></h1>
      <h2 ref={text2}></h2>
    </div>
  )
}