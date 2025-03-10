import React, { useEffect, useState, useRef } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// =============================IMPORT COMPONENTS===============================================
import Header from "./components/common/Header.js";
import Home from "./components/Home";
import "./App.css";
import Services from "./components/Services";
import TheData from "./components/TheData";
import Customers from "./components/Customers";
import Posts from "./components/Posts";
import Footer from "./components/common/Footer.js";
import TempControll from "./components/TempControll";
import Agreement from "./components/Agreement.js";
import useScrollAnimation from "./components/useScrollAnimation";
import MriChillers from "./components/MriChillers";
// import OurTechnology from "./components/OurTechnology";
import Contact from "./components/Contact";
import EquipmentBrand from "./components/EquipmentBrand.js";
import ReqServices from "./components/ReqServices.js";

// import About from "./components/About";

function MainLayout() {
  useScrollAnimation({ duration: 200, easing: "easeInOutQuad", offset: -80 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".section-fade-in").forEach((section) => {
      observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  // !!!!!!!!!!!!!!!!!! SCROLLING SMOOTH ANIMATION !!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  const scrollToSection = (ref) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! COMPOMNENTS CALLING !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  return (
    <div className="App">
      <Header scrollToSection={scrollToSection} />
      <div id="main" className="section-fade-in" >
        <Home />
      </div>
      {/* <div ref={homeRef} className="section-fade-in" dangerouslySetInnerHTML={{ __html: htmlContent }} /> */}
      <div id="services" className="section-fade-in" >
        <Services />
      </div>
      <TheData />
      <div id="customers" className="section-fade-in">
        <Customers />
      </div>
      <div id="posts" className="section-fade-in">
        <Posts />
      </div>
      <div id="agreement" className="section-fade-in">
        <Agreement />
      </div>
      <Footer />
      
    </div>
  );
}
// =================================ROUTING BETWEENS COMPONENTS==============================================
function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<MainLayout />} />
        <Route path="/temp-control" element={<TempControll />} />
        <Route path="/mri-chillers" element={<MriChillers />} />
        {/* <Route path="/our-technology" element={<About />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/equipment-brands" element={<EquipmentBrand />} />
        <Route path="/request-service" element={<ReqServices />} /> 
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
