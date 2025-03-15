import React from "react";
import Header from "../components/Header/Header";
import ThankYou from "../components/ThankYou/ThankYou";
import Footer from "../components/Footer/Footer";

const LandingPage = () => {
  return (
    <div className="page">
      <Header />
      <ThankYou />
      <Footer />
    </div>
  );
};

export default LandingPage;
