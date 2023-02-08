import React from "react";
import AboutBanner from "../components/AboutBanner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MailBox from "../components/MailBox";
import Quote from "../components/Quote";
import Result from "../components/Result";
import Team from "../components/Team";
import WhatWeDo from "../components/WhatWeDo";

function AboutPage() {
  return (
    <div>
      <Header />
      <AboutBanner />
      <Quote />
      <WhatWeDo />
      <Result />
      <Team />
      <MailBox />
      <Footer />
    </div>
  );
}

export default AboutPage;
