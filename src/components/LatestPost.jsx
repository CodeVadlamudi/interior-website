import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";

function LatestPost() {
  return (
    <div className="max-w-7xl mx-auto mt-20 px-10">
      <h2 className="text-2xl font-medium mb-10 text-center">Latest Post</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <img src="./images/post.png" alt="" className="max-w-[450px] w-full mx-auto" />

        <div className="max-w-[600px] w-full mx-auto space-y-3">
          <h2 className="text-xl font-medium lg:text-3xl">Low Cost Latest Invented Interior Designing Ideas</h2>
          <p className="text-[17px]">
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
            dignissim maximus.posuere in.Contrary to popular belief.
          </p>
          <p className="text-[17px]">
            Lorem Ipsum is not simply random text. It has roots in a piece of
            classica.
          </p>

          <div className="flex items-center space-x-4 justify-between">
            <h4>26 December,2022 </h4>
            <ArrowRightIcon className="w-12 h-12 bg-[#F4F0EC] p-3 rounded-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestPost;
