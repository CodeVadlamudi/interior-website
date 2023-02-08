import React from "react";

function ContactBanner() {
  return (
    <div
      style={{
        backgroundImage: "url('./images/service.png')",
        backgroundSize: "cover",
        objectFit: "cover",
        backgroundPosition: "center",
      }}
      className="h-72 w-full relative"
    >
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] p-6 rounded-tl-xl rounded-tr-xl text-center">
        <h2 className="text-3xl lg:text-4xl font-medium">Contact Us</h2>
        <h2>Home {" / "} Contact</h2>
      </div>
    </div>
  );
}

export default ContactBanner;
