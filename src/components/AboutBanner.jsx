import React from "react";

function AboutBanner() {
  return (
    <div
      style={{
        backgroundImage: "url('./images/about.png')",
        backgroundSize: "cover",
        objectFit: "cover",
        backgroundPosition: "center",
      }}
      className="h-72 w-full relative"
    >
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white w-[240px] sm:w-[300px] md:w-[350px] lg:w-[400px] p-6 rounded-tl-xl rounded-tr-xl text-center">
        <h2 className="text-3xl lg:text-4xl font-medium">About Us</h2>
        <h2>Home {" / "} About us</h2>
      </div>
    </div>
  );
}

export default AboutBanner;
