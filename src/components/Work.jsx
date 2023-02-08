import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";

function Work() {
  const Works = [
    {
      workTitle: "Project Plan",
      workDescription:
        "There are many variations of the passages of lorem Ipsum from available, majority.",
      workReadMore: "Read More",
      workIcon: <ArrowRightIcon className="w-5 h-5 object-cover" />,
    },
    {
      workTitle: "Interior Work",
      workDescription:
        "There are many variations of the passages of lorem Ipsum from available, majority.",
      workReadMore: "Read More",
      workIcon: <ArrowRightIcon className="w-5 h-5 object-cover" />,
    },
    {
      workTitle: "Realization",
      workDescription:
        "There are many variations of the passages of lorem Ipsum from available, majority.",
      workReadMore: "Read More",
      workIcon: <ArrowRightIcon className="w-5 h-5 object-cover" />,
    },
  ];
  return (
    <div className="bg-[#F4F0EC] px-10 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {Works.map((work) => (
          <div className="text-center space-y-5 p-10 rounded-md shadow-md bg-white">
            <h3 className="text-2xl font-medium">{work.workTitle}</h3>
            <p className="text-lg">{work.workDescription}</p>
            <div className="flex items-center justify-center">
              <input
                type="button"
                value={work.workReadMore}
                className="mr-5 font-medium"
              />
              <div className="text-[#CDA274]">{work.workIcon}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
