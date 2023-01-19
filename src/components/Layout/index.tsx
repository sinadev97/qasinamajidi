import { ReactNode } from "react";
import { Header } from "./Header";

type LayoutProps = {
  children: ReactNode;
  title?: string;
};

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Header title={title} />
      {children}
    </>
  );
};

export default Layout;
