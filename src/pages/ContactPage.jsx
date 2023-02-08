import React from "react";
import ContactBanner from "../components/ContactBanner";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Header from "../components/Header";

function ContactPage() {
  return (
    <div>
      <Header />
      <ContactBanner />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default ContactPage;
