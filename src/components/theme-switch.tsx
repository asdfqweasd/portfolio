"use client";
import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoonStars, BsSunset } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-[3rem]
     h-[3rem] rounded-full bg-opacity-80 backdrop-blur-[0.5rem]
      border border-white border-opacity-40 shadow-2xl
       flex items-center justify-center hover:scale-[1.15]
        active:scale-105 transition-all dark:bg-gray-800"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSunset /> : <BsMoonStars />}
    </button>
  );
}
