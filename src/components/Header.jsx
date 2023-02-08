import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

function Header() {
  const Links = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Services", link: "/service" },
    { name: "Project", link: "/project" },
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/contact" },
  ];

  const [toggle, setToggle] = useState(false);
  return (
    <header className="p-5 bg-white shadow-md z-50 sticky top-0">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/">
          <img
            src="./images/logo.png"
            alt="logo-img"
            className="w-44 h-12 object-cover"
          />
        </a>

        <nav
          className={`flex items-center flex-col lg:flex-row absolute lg:relative top-24 lg:top-0 lg:space-x-4 bg-white lg:bg-none shadow-md lg:shadow-none p-4 lg:p-0 w-full lg:w-auto left-0 right-0 transition-all duration-200 text-[#292F36] space-y-4 lg:space-y-0 ${
            toggle ? "left-0" : "left-[-100%] lg:left-0"
          }`}
        >
          {Links.map((link) => (
            <div className="w-full lg:w-auto">
              <a
                href={link.link}
                className="hover:bg-[#CDA274] px-2 py-1 rounded-sm font-medium block"
              >
                {link.name}
              </a>
            </div>
          ))}
        </nav>

        <div
          onClick={() => setToggle(!toggle)}
          className="cursor-pointer lg:hidden"
        >
          {toggle ? (
            <XMarkIcon className="w-8 h-8 object-cover text-[#292F36]" />
          ) : (
            <Bars3Icon className="w-8 h-8 object-cover text-[#292F36]" />
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
