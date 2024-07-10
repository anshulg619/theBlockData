import React from "react";
import {Link} from 'react-router-dom';
import card1 from "../images/card1.webp";
import card2 from "../images/card2.webp";
import card3 from "../images/card3.webp";
import card4 from "../images/card4.webp";
import card5 from "../images/card5.webp";
import card6 from "../images/card6.webp";

const Cards = () => {
  return (
    <div>
      <h1>Our Best Services</h1>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <Link className ="link" to ="/services/webdev">
        <div class="col">
          <div class="card h-100">
            <img src={card1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Web Development</h5>
              <p class="card-text">
                We The Block Data experts can create Latest applications, platforms and products to meet the requirements of your buisness or new venture.
              </p>
            </div>
          </div>
        </div>
        </Link>
        <Link className ="link" to="/services/uiux">
        <div class="col">
          <div class="card h-100">
            <img src={card2} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">UI/UX Designing</h5>
              <p class="card-text">Our team will help you to design a unique website design which is essential for marketin and branding process for your buisness</p>
            </div>
          </div>
        </div>
        </Link>
        <Link className ="link" to="/services/appdev">
        <div class="col">
          <div class="card h-100">
            <img src={card3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">App Development</h5>
              <p class="card-text">
                Our INDIA-based team of mobile app developers can help you to grow your brand engagement with an fast creative , interactive and Best User experience native app.
              </p>
            </div>
          </div>
        </div>
        </Link>
        <Link className ="link" to="/services/digi-marketing">
        <div class="col">
          <div class="card h-100">
            <img src={card4} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Digital Mareting</h5>
              <p class="card-text">
                Our Team will help you to obtain top rankings for desired search terms and drive qualified leads that are crucial to building your business.
              </p>
            </div>
          </div>
        </div>
        </Link>
        <Link className ="link" to="/services/outsourcing">
        <div class="col">
          <div class="card h-100">
            <img src={card5} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Outsourcing</h5>
              <p class="card-text">
                Outsource your Development projects you will not only get access to the creative team but also get our services at a fraction of cost and within time as compared to your Country.
              </p>
            </div>
          </div>
        </div>
        </Link>
        <Link className ="link" to="/services/startup">
        <div class="col">
          <div class="card h-100">
            <img src={card6} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">StartUp Product Development</h5>
              <p class="card-text">
                New start-up or venture, Let us help you with the most challenging aspect of starting a business: developing your software application.
              </p>
            </div>
          </div>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Cards;
