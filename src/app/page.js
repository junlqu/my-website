"use client";

import "@/app/style/main.scss";

export default function Home() {
  return (
    <div>
      <button onClick={change}>Change</button>
    </div>
  );
}

function change() {
  document.body.classList.toggle("dark-theme");
  document.body.classList.toggle("light-theme");
}