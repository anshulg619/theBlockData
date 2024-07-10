import React from 'react'
import first from "../images/bgimage.jpg";
import second from "../images/secondslide.jpg";
import third from "../images/third.jpg";
const Carousel = () => {
  return (
    <div>
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={first} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1>First slide label</h1>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={second} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1>First slide label</h1>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={third} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1>First slide label</h1>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button"  data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button"  data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      
    </div>
  )
}

export default Carousel
