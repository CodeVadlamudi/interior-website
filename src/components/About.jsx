import { ArrowRightIcon, PhoneIcon } from "@heroicons/react/24/outline";
import React from "react";

function About() {
  return (
    <div className="px-10 mt-20 flex flex-col md:flex-row items-center max-w-7xl mx-auto justify-center md:space-x-10">
      <div className="space-y-10 md:w-1/2">
        <h2 className="text-3xl lg:text-4xl font-medium">
          We Create The Art Of Stylish Living Stylish
        </h2>

        <p className="text-lg">
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts the points
          of using that it has a more-or-less normal.
        </p>

        <div className="flex items-center space-x-5">
          <PhoneIcon className="w-16 h-16 object-cover bg-[#F4F0EC] p-3 rounded-sm text-[#CDA274]" />
          <div>
            <h3 className="text-lg font-medium">01234456789</h3>
            <span>Call Us Anytimme</span>
          </div>
        </div>

        <button className="flex items-center bg-[#292F36] text-white w-52 h-12 justify-center rounded-md">
          Get Free Estimate{" "}
          <ArrowRightIcon className="w-6 h-6 object-cover ml-2 text-[#CDA274]" />
        </button>
      </div>

      <img
        src="./images/img1.png"
        alt="img1"
        className="h-96 w-96 md:h-[450px] object-cover mt-10 md:mt-0 rounded-md"
      />
    </div>
  );
}

export default About;
