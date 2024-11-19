import React from "react";

export default function HomeBackground() {
  return (
    <div className="relative w-full h-[85vh]">
      <img
        className="object-cover w-full h-full"
        src="img/piss.jpg"
        alt="Home Background"
      />
      <div className="absolute inset-0 bg-black opacity-40"></div>{" "}
    </div>
  );
}
