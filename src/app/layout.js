import "@/style/main.scss";

import MainHeader from "cmp/header/MainHeader";
import GetTheme from "util/GetTheme";

export const metadata = {
  title: "Welcome | Junlin Qu",
  description: "Welcome to my personal website. I am a software engineer based in Toronto, Canada. I am passionate about building software that is scalable, maintainable, and user-friendly.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="light-theme">
        <GetTheme />
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
