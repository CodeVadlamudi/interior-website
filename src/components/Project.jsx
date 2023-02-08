import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

function Project() {
  const Projects = [
    {
      projectImg: "./images/project1.png",
      projectName: "Modern Kitchan",
      projectTitle: "Decor / Artchitecture",
      projectIcon: <ArrowRightIcon className="w-6 h-6 object-cover" />,
    },
    {
      projectImg: "./images/project2.png",
      projectName: "Modern Kitchan",
      projectTitle: "Decor / Artchitecture",
      projectIcon: <ArrowRightIcon className="w-6 h-6 object-cover" />,
    },
    {
      projectImg: "./images/project3.png",
      projectName: "Modern Kitchan",
      projectTitle: "Decor / Artchitecture",
      projectIcon: <ArrowRightIcon className="w-6 h-6 object-cover" />,
    },
    {
      projectImg: "./images/project4.png",
      projectName: "Modern Kitchan",
      projectTitle: "Decor / Artchitecture",
      projectIcon: <ArrowRightIcon className="w-6 h-6 object-cover" />,
    },
  ];
  return (
    <div className="mt-20 px-10 bg-[#F4F0EC] py-20">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-medium">Follow Our Projects</h2>
          <p className="md:text-lg lg:w-6/12 mx-auto">
            It is a long established fact that a reader will be distracted by
            the of readable content of page lookings at its layouts points.
          </p>
        </div>

        <div className="grid grid-rows-2 grid-cols-1 sm:w-9/12 mx-auto md:w-auto md:grid-cols-2 gap-10">
          {Projects.map((project) => (
            <div className="space-y-4">
              <img
                src={project.projectImg}
                alt="project-img"
                className="w-full h-96 object-cover rounded-lg"
              />
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium">{project.projectName}</h3>
                  <span>{project.projectTitle}</span>
                </div>
                <span className="bg-white w-12 h-12 rounded-full flex items-center justify-center">
                  {project.projectIcon}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
