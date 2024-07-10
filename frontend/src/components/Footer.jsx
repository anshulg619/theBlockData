import React from 'react';
import{ Link } from 'react-router-dom';

const Footer = () => {
    return(
        <div id = "footer">
        <div id = "bg">
            <div  className ="flex">
                 <p id = "adv">Looking for a realiable IT company for your Web/App Development Project?</p>
                 <button type="button" className = "btn btn-light">Request a Qoute</button>
            </div>
        </div>
        <div className = "flex"  id = "footer-text">
            
            <ul >
            <h5>Quick Links</h5>
                <li>
                    <Link to="/Career" className= "link">Career</Link>
                </li>
                <li>
                    <Link to="/faq" className= "link">FAQ's</Link>
                </li>
                <li>
                    <Link to="/services" className= "link">Services</Link>
                </li>
                <li>
                    <Link to="/About" className= "link">AboutUs</Link>
                </li>
                <li>
                    <Link to="/misson" className= "link">Mission & Vision</Link>
                </li>
            </ul>
            <p>
                <h5>Reach Us</h5>
                <h6>The Block Data IT Solution</h6>
                <p>209, Friends Colony, Tekadi Road, Kanhan, Nagpur, Maharashtra-441401</p>
                <p>7985286410</p>
                <a className = "link" href="mailto: info@blockdata.in">info@blockdata.in</a>
            </p>
            <p>
                <h5>Newsletter</h5>
                <br/>
                <p>Sign-up to our Newsletter to get the latest news and offers</p>
                <br/>
                <input type = "email"/><button type = "button" className = "btn btn-primary">Go!</button>
            </p>
        </div>
        </div>
    )
}

export default Footer;