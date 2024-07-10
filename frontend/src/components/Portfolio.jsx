import React from "react";
import Cards2 from './Cards2';
import Footer from './Footer';
import {Link} from 'react-router-dom'
const Portfolio = () => {
  return (
    <div>
      <p className="img-top">
        <h1>Portfolio</h1>
        <span className="back-color"><Link to="/" className="link">Home</Link>/Portfolio</span>
      </p>
      <div className="spacing">
        <Cards2/>
      </div>
      <Footer/>
    </div>
  );
}

export default Portfolio;
