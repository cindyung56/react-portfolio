import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

export default function Container() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      <Home />;
    } else if (currentPage === "Portfolio") {
      <Portfolio />;
    } else if (currentPage === "Contact") {
      <Contact />;
    } else if (currentPage === "Resume") {
      <Resume />;
    }
  };

  return (
    <div>
      <Header />
      {renderPage}
      <Footer />
    </div>
  );
}
