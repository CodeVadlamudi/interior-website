import { ArrowRightIcon } from "@heroicons/react/24/outline";
import React from "react";

function Blog() {
  const Blogs = [
    {
      blogImg: "./images/news1.png",
      blogName: "Kitchen Desgin",
      blogTitle: "Let’s Get Solution For Building Construction Work",
      blogDate: "26 December,2022",
      blogIcon: <ArrowRightIcon className="w-6 h-6" />,
    },
    {
      blogImg: "./images/news2.png",
      blogName: "Living Design",
      blogTitle: "Low Cost Latest Invented Interior Designing Ideas.",
      blogDate: "26 December,2022",
      blogIcon: <ArrowRightIcon className="w-6 h-6" />,
    },
    {
      blogImg: "./images/news3.png",
      blogName: "Interior Design",
      blogTitle: "Best For Any Office & Business Interior Solution",
      blogDate: "26 December,2022",
      blogIcon: <ArrowRightIcon className="w-6 h-6" />,
    },
  ];
  return (
    <div className="max-w-7xl mx-auto my-20 px-10 space-y-10">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-medium">Articles & News</h2>
        <p className="md:text-lg md:w-10/12 mx-auto lg:w-8/12">
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts the points
          of using.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-10 md:space-y-0 gap-4">
        {Blogs.map((blog) => (
          <div className="bg-white shadow-md rounded-sm p-3 transition-all duration-200 hover:bg-[#F4F0EC]">
            <div className="relative">
              <img
                src={blog.blogImg}
                alt="blog-img"
                className="w-full object-cover relative h-[300px]"
              />
              <h3 className="text-sm font-medium absolute bottom-4 left-4 z-20 bg-white py-2 px-4 rounded-tl-md rounded-tr-md rounded-br-md">
                {blog.blogName}
              </h3>
            </div>
            <h2 className="text-lg font-medium mt-4">{blog.blogTitle}</h2>
            
            <div className="flex items-center justify-between mt-2 rounded-sm bg-[#F4F0EC] px-4 py-2">
              <h4>{blog.blogDate}</h4>
              <span>{blog.blogIcon}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
