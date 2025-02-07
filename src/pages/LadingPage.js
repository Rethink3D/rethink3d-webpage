// src/pages/LandingPage.js
import React from "react";
import Header from "../components/Header/Header";
import ProductCarousel from "../components/ProductCarousel/ProductCarousel";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";
import RequestForm from "../components/RequestForm/RequestForm";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <ProductCarousel />
      <RequestForm />
      <div id="faq">
        <FAQ />
      </div>
      <div id="contato">
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
