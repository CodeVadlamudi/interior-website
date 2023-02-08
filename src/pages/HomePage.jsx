import React from "react";
import About from "../components/About";
import Blog from "../components/Blog";
import ClientLogo from "../components/ClientLogo";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Project from "../components/Project";
import Testimonial from "../components/Testimonial";
import Work from "../components/Work";

function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <Work />
      <About />
      <Testimonial />
      <ClientLogo />
      <Project />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage;
