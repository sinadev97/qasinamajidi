import { ReactNode } from "react";
import ReactDOM from "react-dom";

const Portal = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <>{children}</>,
        document.getElementById("portal-root")!
      )}
    </>
  );
};

export default Portal;
