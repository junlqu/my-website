import Link from "next/link";

import ThemeChangeButton from "@/components/header/ThemeChangeButton";

export function MainHeaderNavLeft() {
  return (
    <div className="main-header-nav-wrapper">
      <div id="main-header-left" className="main-header-nav hidden-right">
        <Link className="header-content menu-options" href="/">
          Home
        </Link>
        <Link className="header-content menu-options" href="/aboutme">
          About Me
        </Link>
        <Link className="header-content menu-options" href="/projects">
          Projects
        </Link>
      </div>
    </div>
  );
}

export function MainHeaderNavRight() {
  return (
    <div className="main-header-nav-wrapper">
      <div id="main-header-right" className="main-header-nav hidden-left">
        <Link className="header-content menu-options" href="/contact">
          Contact
        </Link>
        <Link className="header-content menu-options" href="/resume">
          Resume
        </Link>
        <ThemeChangeButton className="header-content menu-options"/>
      </div>
    </div>
  );
}