import React from "react";

function ClientLogo() {
  const Images = [
    { logoImg: "./images/brand1.svg" },
    { logoImg: "./images/brand2.svg" },
    { logoImg: "./images/brand3.svg" },
    { logoImg: "./images/brand4.svg" },
    { logoImg: "./images/brand5.svg" },
  ];
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-20 px-10 gap-10 items-center">
      {Images.map((img) => (
        <img src={img.logoImg} alt="brand-img" />
      ))}
    </div>
  );
}

export default ClientLogo;
