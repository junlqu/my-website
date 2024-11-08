import Link from "next/link";

import ThemeChangeButton from "cmp/ThemeChangeButton";

export function MainHeaderNavLeft() {
  return (
    <div className="main-header-nav-wrapper">
      <div id="main-header-left" className="main-header-nav hidden-right">
        <Link className="header-content" href="/">
          Home
        </Link>
        <Link className="header-content" href="/aboutme">
          About Me
        </Link>
        <Link className="header-content" href="/projects">
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
        <Link className="header-content" href="/contact">
          Contact
        </Link>
        <Link className="header-content" href="/resume">
          Resume
        </Link>
        <ThemeChangeButton />
      </div>
    </div>
  );
}