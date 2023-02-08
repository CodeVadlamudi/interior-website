import React from "react";
import { categoryBox } from "../Data";

function Category() {
  return (
    <div className="my-20 px-10 max-w-7xl mx-auto">
      <h2 className="text-center font-medium text-3xl mb-10">Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {categoryBox.map((category) => (
          <div className="relative space-y-1 bg-white shadow-md p-2">
            <img
              src={category.img}
              alt="img"
              className="max-w-[800px] w-full h-[400px] object-cover rounded-md"
            />

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-medium">{category.nameHeading}</h3>
                <h5>{category.role}</h5>
              </div>
              <div className="w-12 h-12 bg-[#F4F0EC] p-3 rounded-full">
                {category.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
