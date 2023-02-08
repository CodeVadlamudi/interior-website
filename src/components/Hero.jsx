import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";

function Hero() {
  return (
    <div className="relative bg-slate-300 h-[400px] md:h-[440px] lg:h-[550px] xl:h-[650px]">
      <img
        src="./images/banner.png"
        alt="banner-img"
        className="w-full h-full object-cover"
      />

      <div className="absolute top-1/2 -translate-y-1/2 px-4 ml-10 lg:ml-36 md:ml-24 md:w-1/2 space-y-4">
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
          Let Your Home <br />
          Be Unique
        </h2>
        <p className="flex text-lg p-2 rounded-md">
          There are many variations of the passages of lorem Ipsum
          fromavailable, variations of the passages and fromavailable,
          variations of the passages.
        </p>
        <div className="flex items-center justify-center text-white space-x-2 bg-[#292F36] w-40 h-12 rounded-md cursor-pointer">
          <input type="button" value="Get Started" className="cursor-pointer" />
          <ArrowRightIcon className="w-6 h-6 text-[#CDA274]" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
