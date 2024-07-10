import React from "react";
import Slider from "react-slick";
import client1 from "../images/client1.webp";
import client2 from "../images/client2.webp";
import client3 from "../images/client3.webp";
import client4 from "../images/client4.webp";
import client5 from "../images/client5.webp";
import client6 from "../images/client6.webp";

function Slick() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={client1} alt=" "/>
        </div>
        <div>
        <img src={client2} alt=" "/>
        </div>
        <div>
        <img src={client3} alt=" "/>
        </div>
        <div>
        <img src={client4} alt=" "/>
        </div>
        <div>
        <img src={client5} alt=" "/>
        </div>
        <div>
        <img src={client6} alt=" "/>
        </div>
      </Slider>
    </div>
  );
}

export default Slick;
