import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BaseFooter from "./components/BaseFooter";

const BaseLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="max-w-[720px] mx-auto my-10 flex gap-y-10 flex-col justify-between min-h-[100dvh]">
      {children}
      <BaseFooter />
    </div>
  );
};

export default BaseLayout;
