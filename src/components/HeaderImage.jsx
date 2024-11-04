import Image from "next/image";
import Link from "next/link";

import { MainHeaderNavLeft, MainHeaderNavRight } from "./MainHeaderNavigation";

export default function HeaderImage(props) {
  return (
    <Link id="main-header-image-wrapper" href="/">
      <MainHeaderNavLeft />
      <Image id="main-header-image" src="/temp.png" width={64} height={64} alt="JLQ" className="header-content" />
      <MainHeaderNavRight />
    </Link>
  );
}