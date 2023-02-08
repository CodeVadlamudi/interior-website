import { ArrowRightIcon } from "@heroicons/react/24/outline";
import React from "react";

function ServiceBox() {
  const serviceBoxes = [
    {
      serviceName: "Project Plan",
      serviceDescription:
        "There are many variations of the passages of lorem Ipsum from available, majority.",
      serviceBtn: "Read More",
      serviceIcon: <ArrowRightIcon className="w-6 h-6u text-[#CDA274]" />,
    },
    {
      serviceName: "Project Plan",
      serviceDescription:
        "There are many variations of the passages of lorem Ipsum from available, majority.",
      serviceBtn: "Read More",
      serviceIcon: <ArrowRightIcon className="w-6 h-6u text-[#CDA274]" />,
    },
    {
      serviceName: "Project Plan",
      serviceDescription:
        "There are many variations of the passages of lorem Ipsum from available, majority.",
      serviceBtn: "Read More",
      serviceIcon: <ArrowRightIcon className="w-6 h-6u text-[#CDA274]" />,
    },
    {
      serviceName: "Project Plan",
      serviceDescription:
        "There are many variations of the passages of lorem Ipsum from available, majority.",
      serviceBtn: "Read More",
      serviceIcon: <ArrowRightIcon className="w-6 h-6u text-[#CDA274]" />,
    },
    {
      serviceName: "Project Plan",
      serviceDescription:
        "There are many variations of the passages of lorem Ipsum from available, majority.",
      serviceBtn: "Read More",
      serviceIcon: <ArrowRightIcon className="w-6 h-6u text-[#CDA274]" />,
    },
    {
      serviceName: "Project Plan",
      serviceDescription:
        "There are many variations of the passages of lorem Ipsum from available, majority.",
      serviceBtn: "Read More",
      serviceIcon: <ArrowRightIcon className="w-6 h-6u text-[#CDA274]" />,
    },
  ];
  return (
    <div className="mt-20 px-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {serviceBoxes.map((service) => (
        <div className="space-y-4 text-center border-2 border-[#F4F0EC] p-8 hover:bg-[#F4F0EC] duration-200">
          <h2 className="text-2xl font-medium">{service.serviceName}</h2>
          <p className="text-lg">{service.serviceDescription}</p>

          <div className="flex items-center justify-center rounded-md w-48 mx-auto bg-[#292F36] space-x-4 text-white p-2">
            <button type="button" className="text-sm">
              {service.serviceBtn}
            </button>
            {service.serviceIcon}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ServiceBox;
