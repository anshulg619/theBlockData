import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import logo from "../images/logo.webp";

const Navbar = () => {
  return (
    <div>
     <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/"><img src={logo} id="logo" alt="" /></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Contact">ContactUs</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Portfolio">Portfolio</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/About">About</Link>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="/dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/services/webdev">Web Development</Link></li>
            <li><Link class="dropdown-item" to="/services/uiux">UI/UX designing</Link></li>
            <li><Link class="dropdown-item" to="/services/appdev">Application development</Link></li>
            <li><Link class="dropdown-item" to="/services/digi-marketing">Digital Marketing</Link></li>
            <li><Link class="dropdown-item" to="/services/outsourcing">Outsourcing</Link></li>
            <li><Link class="dropdown-item" to="/services/startup">StartUp Product Development</Link></li>
          </ul>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/qoute">
          <button type="button" class="btn btn-info">Quote</button>
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
