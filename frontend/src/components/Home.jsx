import React from "react";
import Carousel from "./Carousel";
import image from "../images/image.svg";
import Cards from "./Cards";
import Cards2 from "./Cards2";
import Slick from "./Slick";
import Slick2 from "./Slick2";
import Footer from "./Footer";


const Home = () => {
  return (

      <div>
        <Carousel />
        <div className ="flex">
          <p className="para">
            <h1>Welcome to Block Data</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, quos molestiae excepturi, ex incidunt quam corrupti asperiores placeat officiis, perferendis aspernatur deleniti commodi nesciunt. Ad nisi odit culpa repellat quasi.</p>
          </p>
          <img className="size" src={image} alt="" />
        </div>
        <div className = "spacing">
        <Cards/>
        </div>
        <div className = "spacing">
        <Cards2/>
        </div>
        <div className = "spacing">
          <h1>Our Clients</h1>
          <Slick/>
        </div>
        <div className = "spacing">
          <h1>Technologies</h1>
          <Slick2/>
        </div>
        <div>
            <Footer/>
        </div>    
      </div>
  );
};

export default Home;
