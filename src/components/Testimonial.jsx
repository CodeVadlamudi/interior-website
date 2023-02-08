import React from "react";

function Testimonial() {
  const Testimonials = [
    {
      avatarImg: "./images/avatar.png",
      avatarName: "Nattasha Mith",
      avatarLive: "Sydney, USA",
      avatarDescription:
        "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.",
    },
    {
      avatarImg: "./images/avatar.png",
      avatarName: "Nattasha Mith",
      avatarLive: "Sydney, USA",
      avatarDescription:
        "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.",
    },
    {
      avatarImg: "./images/avatar.png",
      avatarName: "Nattasha Mith",
      avatarLive: "Sydney, USA",
      avatarDescription:
        "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.",
    },
  ];
  return (
    <div className="bg-[#F4F0EC] mt-20 px-10 py-20">
      <div className="max-w-7xl mx-auto space-y-10">
        <h2 className="text-3xl font-medium text-center">
          What the People Thinks About Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {Testimonials.map((testimonial) => (
            <div className="space-y-5 bg-white p-10 rounded-md shadow-md sm:w-10/12 sm:mx-auto md:w-full">
              <div className="flex items-center space-x-5">
                <img
                  src={testimonial.avatarImg}
                  alt="avatar-img"
                  className="w-20 h-20 rounded-full border bg-[#CDA274]"
                />
                <div>
                  <h3 className="text-xl font-medium">
                    {testimonial.avatarName}
                  </h3>
                  <p>{testimonial.avatarLive}</p>
                </div>
              </div>
              <p>{testimonial.avatarDescription}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
