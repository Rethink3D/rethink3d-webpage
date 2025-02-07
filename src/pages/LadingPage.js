// src/pages/LandingPage.js
import React from "react";
import Header from "../components/Header/Header";
import ProductCarousel from "../components/ProductCarousel/ProductCarousel";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <ProductCarousel />
      <FAQ />
      <Footer />
    </div>
  );
};

export default LandingPage;
