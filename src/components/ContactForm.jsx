import {
  EnvelopeIcon,
  PhoneIcon,
  GlobeAsiaAustraliaIcon,
} from "@heroicons/react/24/outline";
import React from "react";

function ContactForm() {
  const contactIcons = [
    {
      icon: <EnvelopeIcon />,
      title: "example@gmail.com",
    },
    {
      icon: <PhoneIcon />,
      title: "+1234567890",
    },
    {
      icon: <GlobeAsiaAustraliaIcon />,
      title: "www.interior.com",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto my-20 px-10">
      <div>
        <h2 className="text-2xl font-medium md:text-3xl">
          We love meeting new people and helping them.
        </h2>

        <div className="flex flex-col-reverse md:flex-row gap-10 mt-10">
          <div className="bg-[#F4F0EC] p-10 space-y-4 rounded-md md:w-5/12">
            {contactIcons.map((icon) => (
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 object-cover">{icon.icon}</div>
                <h5>{icon.title}</h5>
              </div>
            ))}
          </div>

          <form className="w-full flex flex-col gap-2">
            <div className="w-full flex flex-col lg:flex-row items-center gap-2 lg:gap-10">
              <input type="text" placeholder="Name" className="input" />
              <input type="email" placeholder="Email" className="input" />
            </div>
            <div className="w-full flex flex-col lg:flex-row items-center gap-2 lg:gap-10">
              <input type="text" placeholder="Subject" className="input" />
              <input type="tel" placeholder="Phone" className="input" />
            </div>
            <textarea placeholder="Message" className="input" />
            <button className="bg-[#292F36] w-[250px] h-12 text-white rounded-sm text-lg mt-5">
              Send now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
