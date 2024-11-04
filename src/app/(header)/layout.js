import MainHeader from "@/components/MainHeader";

export default function HeaderLayout({ children }) {
  return (
    <>
      <MainHeader />
      {children}
    </>
  );
}