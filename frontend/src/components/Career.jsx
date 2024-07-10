import React from 'react';
import Accordion from "./Accordion";
import {Link} from 'react-router-dom';
import Footer from './Footer';

const Career = () => {
    return(
    <div>
        <div className="img-top ">
        <h1>Career</h1>
        <span className="back-color"><Link to="/" className="link">Home</Link>/Career</span>
      </div>
    <Accordion/>
    <div>
      <Footer/>
    </div>
    </div>
    )
    
}
export default Career;