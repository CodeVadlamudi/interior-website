import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceBanner from "../components/ServiceBanner";
import ServiceBox from "../components/ServiceBox";
import ServiceContact from "../components/ServiceContact";
import ServiceWork from "../components/ServiceWork";

function ServicePage() {
  return (
    <div>
      <Header />
      <ServiceBanner />
      <ServiceBox />
      <ServiceWork />
      <ServiceContact />
      <Footer />
    </div>
  );
}

export default ServicePage;
