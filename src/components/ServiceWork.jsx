import React from "react";
import { serviceContent } from "../Data";

function ServiceWork() {
  return (
    <div className="mt-20 bg-[#F4F0EC] py-20 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-10">
          <h2 className="text-3xl font-medium">How We Work</h2>
          <p>
            It is a long established fact will be distracted.Lorem Ipsum is
            simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        {/* Service Content */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center">
          {serviceContent.map((service) => (
            <div className="bg-white p-2">
              <img
                src={service.img}
                alt="img"
                className="rounded-md h-[400px] w-[480px] mx-auto object-cover"
              />
              <div className="mt-5 space-y-2">
                <h1 className="font-bold text-xl">{service.num}</h1>
                <h3 className="text-2xl">{service.nameHeading}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceWork;
