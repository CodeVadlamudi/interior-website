import React from "react";
import Blog from "../components/Blog";
import BlogBanner from "../components/BlogBanner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LatestPost from "../components/LatestPost";

function BlogPage() {
  return (
    <div>
      <Header />
      <BlogBanner />
      <LatestPost />
      <Blog />
      <Footer />
    </div>
  );
}

export default BlogPage;
