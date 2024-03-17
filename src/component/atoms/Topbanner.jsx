import React from "react";
import { GoArrowRight } from "react-icons/go";

export default function Topbannekr() {
  return (
    <main>
      <div className="flex justify-center items-center bg-morning mt-5 py-4 text-white mx-8 rounded-lg">
        <h2> Free Courses 🌟 Sale Ends Soon, Get It Now </h2>
        <button className="ml-5 relative transition-all hover:left-1 hover:transition-all">
          <GoArrowRight className="w-6 h-6" />
        </button>
      </div>
    </main>
  );
}
