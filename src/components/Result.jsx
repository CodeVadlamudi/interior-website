import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

function Result() {
  return (
    <div className="mt-20 max-w-7xl mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 text-[#292F36] items-center">
      <img
        src="./images/result.png"
        alt="img"
        className="rounded-md h-[350px] w-[650px] object-cover mx-auto"
      />

      <div className="space-y-4">
        <h2 className="text-3xl font-medium">The End Result</h2>
        <p className="text-lg">
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts the points
          of using that it has a more-or-less normal.
        </p>

        <button className="flex items-center justify-center w-44 h-12 bg-[#292F36] text-white rounded-md">
          Our Portfolio{" "}
          <ArrowRightIcon className="w-6 h-6 object-cover ml-4 text-[#CDA274]" />
        </button>
      </div>
    </div>
  );
}

export default Result;
