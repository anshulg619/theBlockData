import React from "react";
import Cards from "./Cards";
import Slick from "./Slick";
import Footer from "./Footer";
import {Link} from 'react-router-dom'

const Services = () => {
  return (
    <div>
      <div className="img-top ">
        <h1>Services</h1>
        <span className="back-color">
          <Link to="/" className="link">
            Home
          </Link>
          /Services
        </span>
      </div>
      <div className="spacing">
        <Cards />
      </div>
      <div className="spacing">
        <Slick />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Services;
