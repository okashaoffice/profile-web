"use client";
import React from "react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
const words = [
  {
    text: "Build",
  },
  {
    text: "awesome",
  },
  {
    text: "Apps",
  },
  {
    text: "with",
  },
  {
    text: "Code",
    className: "text-blue-500 dark:text-blue-500",
  },
];
function Typewrite() {
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to Programming starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border hover:bg-white hover:text-black transition-all dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
      </div>
    </div>
  );
}

export default Typewrite;
