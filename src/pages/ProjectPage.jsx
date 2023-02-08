import React from "react";
import Category from "../components/Category";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProjectBanner from "../components/ProjectBanner";

function ProjectPage() {
  return (
    <div>
      <Header />
      <ProjectBanner />
      <Category />
      <Footer />
    </div>
  );
}

export default ProjectPage;
