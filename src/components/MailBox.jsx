import { ArrowRightIcon } from "@heroicons/react/24/outline";
import React from "react";

function MailBox() {
  return (
    <div className="my-20 px-10 relative max-w-3xl mx-auto">
      <form action="!#" className="space-y-10">
        <h2 className="text-3xl font-medium">
          Creative project? Let's have a productive talk.
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-4 text-black">
          <input
            className="w-full h-10 outline-none border-b-2 border-black"
            type="text"
            placeholder="Name"
          />
          <input
            className="w-full h-10 outline-none border-b-2 border-black"
            type="text"
            placeholder="Email"
          />
        </div>

        <textarea
          className="w-full outline-none border-black border-b-2"
          placeholder="Message"
        />

        <button
          type="button"
          className="w-48 h-12 bg-[#292F36] flex items-center justify-center rounded-md text-white font-medium"
        >
          Send Now <ArrowRightIcon className="w-8 h-8 text-[#CDA274] ml-4" />
        </button>
      </form>
    </div>
  );
}

export default MailBox;
