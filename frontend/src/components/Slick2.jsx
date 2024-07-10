import React from 'react';
import Slider from "react-slick";
import techno1 from "../images/techno1.webp";
import techno2 from "../images/techno2.webp";
import techno3 from "../images/techno3.webp";
import techno4 from "../images/techno4.webp";
import techno5 from "../images/techno5.webp";
import techno6 from "../images/techno6.webp";
import logo from "../images/logo.svg";




function Slick2() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img src={techno1} alt=" "/>
          </div>
          <div>
          <img src={techno2} alt=" "/>
          </div>
          <div>
          <img src={techno3} alt=" "/>
          </div>
          <div>
          <img src={techno4} alt=" "/>
          </div>
          <div>
          <img src={techno5} alt=" "/>
          </div>
          <div>
          <img src={techno6} alt=" "/>
          </div>
          <div>
          <img src={logo} alt=" "/>
          </div>
        </Slider>
      </div>
    );
  }

  export default Slick2;