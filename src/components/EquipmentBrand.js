import React from "react";
import "../styles/EquipmentBrand.css";
import Header from "./common/Header.js";
import Footer from "./common/Footer.js";
import { categories, brands } from "../constants/EquipBrands.js";
import ListItem from "./common/ListItem.js";

const EquipmentBrand = () => {
  return (
    <div className="page-wrapper">
      <Header />

      <div className="content-container">
        {/* EQUIPMENT SECTION */}
        <section className="section-container">
          <div className="section-hero equipment-hero">
            <div className="overlay">
              <h1>Equipment Categories</h1>
              <p>Advanced solutions for laboratory and medical applications</p>
            </div>
          </div>

          <div className="grid-container category-grid">
            {categories.map((item) => (
              <ListItem key={item.id} name={item.name} icon={item.icon} />
            ))}
          </div>
        </section>

        {/* BRANDS SECTION */}
        <section className="section-container">
          <div className="section-hero brands-hero">
            <div className="overlay">
              <h1>Brands</h1>
              <p>Trusted manufacturers of high-quality laboratory equipment</p>
            </div>
          </div>

          <div className="grid-container brands-grid">
            {brands.map((brand) => (
              <ListItem key={brand.id} name={brand.name} icon={brand.icon} />
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default EquipmentBrand;
