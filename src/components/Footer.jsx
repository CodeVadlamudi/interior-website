import React from "react";

function Footer() {
  const FooterIcons = [
    { icon: "./images/facebook.png" },
    { icon: "./images/twitter.png" },
    { icon: "./images/linkedin.png" },
    { icon: "./images/instagram.png" },
  ];

  const FooterListOne = [
    {
      footerHeading: "Pages",
      list1: "About Us",
      list2: "Our Projects",
      list3: "Our Team",
      list4: "Contact Us",
      list5: "Services",
    },
  ];

  const FooterListTwo = [
    {
      footerHeading: "Services",
      list1: "Kitchen",
      list2: "Living Area",
      list3: "Bathroom",
      list4: "Dinning Hall",
      list5: "Bedroom",
    },
  ];
  return (
    <div className="bg-[#292F36] pt-20 px-10 text-[#F4F0EC]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 space-y-10 sm:space-y-0 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-10">
        {/* Footer Colum 1 */}
        <div className="space-y-5">
          <a href="/">
            <img
              src="./images/footer-logo.png"
              alt="footer-img"
              className="w-44 h-12 object-cover"
            />
          </a>
          <p className="text-lg">
            It is a long established fact that a reader will be distracted
            lookings.
          </p>

          <div className="flex items-center space-x-4">
            {FooterIcons.map((icons) => (
              <img
                src={icons.icon}
                alt="footer-icon"
                className="w-6 h-6 object-cover"
              />
            ))}
          </div>
        </div>

        {/* Footer Column 2 */}
        <>
          {FooterListOne.map((listOne) => (
            <div className="space-y-4">
              <h3 className="text-xl font-medium">{listOne.footerHeading}</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/">{listOne.list1}</a>
                </li>
                <li>
                  <a href="/">{listOne.list2}</a>
                </li>
                <li>
                  <a href="/">{listOne.list3}</a>
                </li>
                <li>
                  <a href="/">{listOne.list4}</a>
                </li>
                <li>
                  <a href="/">{listOne.list5}</a>
                </li>
              </ul>
            </div>
          ))}
        </>

        {/* Footer Colum 3 */}
        <>
          {FooterListTwo.map((listTwo) => (
            <div className="space-y-4">
              <h3 className="text-xl font-medium">{listTwo.footerHeading}</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/">{listTwo.list1}</a>
                </li>
                <li>
                  <a href="/">{listTwo.list2}</a>
                </li>
                <li>
                  <a href="/">{listTwo.list3}</a>
                </li>
                <li>
                  <a href="/">{listTwo.list4}</a>
                </li>
                <li>
                  <a href="/">{listTwo.list5}</a>
                </li>
              </ul>
            </div>
          ))}
        </>

        {/* Footer Colum 4 */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Contact</h3>
          <p className="text-lg">Vijayawada, Andhra Pradesh</p>
          <p className="text-lg">India 456789</p>
          <p className="text-lg">example@gmail.com</p>
          <h4 className="text-lg">+12345657890</h4>
        </div>
      </div>

      <div className="pt-20 pb-10 text-center">
        <p className="text-xl">
          &copy; All Rights Reserved bg{" "}
          <a href="/" className="underline">
            Vadlamudi Vamsi
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
