import React from "react";
import card1 from "../images/card1.webp";
const Cards2 = () => {
  return (
    <div>
      <h1>Our Portfolio</h1>
      <div div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card h-100">
            <img src={card1} class="card-img-top" alt="..." />
          </div>
        </div>

        <div class="col">
          <div class="card h-100">
            <img src={card1} class="card-img-top" alt="..." />
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={card1} class="card-img-top" alt="..." />
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={card1} class="card-img-top" alt="..." />
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={card1} class="card-img-top" alt="..." />
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={card1} class="card-img-top" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards2;
