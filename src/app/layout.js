import "@/style/main.scss";

import MainHeader from "cmp/header/MainHeader";
import GetThemeFromStorage from "util/GetThemeFromStorage";

export const metadata = {
  title: "Junlin Qu | Welcome",
  description: "Welcome to my personal website. I am a software engineer based in Toronto, Canada. I am passionate about building software that is scalable, maintainable, and user-friendly.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icons/favicon.ico" size="any" />
      </head>
      <body className="light-theme">
        <GetThemeFromStorage />
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
