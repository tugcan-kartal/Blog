"use client";

import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const DarkModeToggle: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("DarkModeToggle must be used within a ThemeProvider");
  }

  const { toggle, mode } = themeContext;

  return (
    <div
      className="w-10 h-6 border border-[#5369c270] rounded-full flex items-center justify-between p-0.5 relative cursor-pointer" onClick={toggle}>
      <div className="text-xs">🌙</div>
      <div className="text-xs">🔆</div>
      <div className={`w-3.5 h-3.5 bg-[#0b1288] rounded-full absolute ${mode === "light" ? "left-[2px]" : "right-[2px]"}`} />
    </div>
  );
};

export default DarkModeToggle;
