import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

function ServiceContact() {
  return (
    <div className="relative my-20 px-10">
      <div className="max-w-3xl mx-auto text-center space-y-4 py-10 rounded-md border border-black">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium">
          Wanna join the interno?
        </h2>
        <p>It is a long established fact will be distracted.</p>

        <div className="bg-[#292F36] flex items-center cursor-pointer justify-between space-x-4 text-[#F4F0EC] w-56 mx-auto px-4 py-2 rounded-md">
          <input
            type="button"
            value="Contact With Us"
            className="text-lg cursor-pointer"
          />
          <ArrowRightIcon className="w-8 h-8 object-cover" />
        </div>
      </div>
    </div>
  );
}

export default ServiceContact;
