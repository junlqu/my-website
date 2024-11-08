import { useRouter } from "next/navigation";

import HamburgerIcon from "@/public/hamburger";
import CloseIcon from "@/public/close";
import ThemeChangeButton from "./ThemeChangeButton";

export default function Hamburger() {
  const router = useRouter();

  // Toggles the hamburger menu
  function openMenu() {
    // Fade the logo and close button
    document.querySelector("#main-header-image").classList.add("filled");
    document.querySelector("#hamburger-close").classList.add("filled");

    // Toggle the menu
    setTimeout(() => {
      document.querySelector("#hamburger-background").classList.toggle("active-hamburger");
    }, 100);

    // Animate the menu icon colours
    setTimeout(() => {
      document.querySelector("#main-header-image").classList.remove("filled");
      document.querySelector("#hamburger-close").classList.remove("filled");
    }, 900);

    // Animate the menu options colour fade and slide in
    document.querySelector("#hamburger-menu").childNodes.forEach((elm, idx) => {
      if (!elm.classList.contains("hamburger-anim")) {
        elm.classList.toggle("hamburger-anim");
      }
      else {
        setTimeout(() => {
          elm.classList.toggle("hamburger-anim");
        }, 1000 + 100 * idx);
      }

      if (!elm.classList.contains("filled")) {
        elm.classList.toggle("filled");
      }
      else {
        setTimeout(() => {
          elm.classList.toggle("filled");
        }, 1000 + 100 * idx);
      }
    });
  }

  // Extra step, for routing, to close the burger menu
  function routeFromMenu(target) {
    router.push(target);
    setTimeout(() => {
      openMenu();
    }, 500);
  }

  return (
    <>
      <HamburgerIcon id="hamburger-toggle" onClick={openMenu} />
      <div id="hamburger-background" className="wrapper">
        <CloseIcon id="hamburger-close" onClick={openMenu} />
        <div id="hamburger-menu">
          <a className="hamburger-content menu-options hamburger-anim filled" onClick={() => routeFromMenu("/")} >
            Home
          </a>
          <a className="hamburger-content menu-options hamburger-anim filled" onClick={() => routeFromMenu("/aboutme")} >
            About Me
          </a>
          <a className="hamburger-content menu-options hamburger-anim filled" onClick={() => routeFromMenu("/projects")} >
            Projects
          </a>
          <a className="hamburger-content menu-options hamburger-anim filled" onClick={() => routeFromMenu("/contact")} >
            Contact
          </a>
          <a className="hamburger-content menu-options hamburger-anim filled" onClick={() => routeFromMenu("/resume")} >
            Resume
          </a>
          <ThemeChangeButton className="menu-options hamburger-anim filled" idx="hamburger" />
        </div>
      </div>
    </>
  )
}