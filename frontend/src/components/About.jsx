import React from "react";
import { Link } from "react-router-dom";
import about1 from "../images/about1.webp";
import about2 from "../images/about2.webp";
import about3 from "../images/about3.webp";
import Slick from "./Slick";
import Footer from "./Footer";

const About = () => {
  return (
    <div>
      <div className="img-top">
        <h1>About Us</h1> 
        <span className="back-color"><Link to="/" className="link">Home</Link>/About</span>
      </div>
      <div className="flex">
        <img className="size" src={about1} alt="" />
        <p className="para">
          <h1>About Us</h1>
          <p>
            The Block Data Solutions, one of the INDIA’s leading young Software
            development company and we are a team of professionals who have
            extensive experience in App/ website design, development and Digital
            marketing and each one of us has spent a great deal of time working
            in corporate, addressing issues and solving problems. We design
            intelligent, cost-effective and User friendly web applications,
            desktop applications and mobile apps that help streamline processes
            for businesses as well as create new revenue streams for start-ups
            and established businesses alike. We provide a complete range of
            custom programming services for companies that want to do business
            over the Internet. We won’t just follow customer’s instructions; we
            advise, consult and find a better solution together. As the
            Experience Agency, we bridge the gap between brand promise and
            expectations by creating transformative Experiences.
          </p>
        </p>
      </div>
      <div className="flex">
        <p className="para">
          <h1>Our mission</h1>
          <p>
            Our mission is to deliver optimal solutions with quality and
            services at reasonable prices. For us customer satisfaction is at
            top priority. We are very friendly in our dealings to the customers
            and it helps us retain existing clients and expand customer circle.
            We always try to improve the quality of our products by exploring
            innovative ideas.
            <ul>
              <li>
                Vision: vision is absolutely vital to everything we develop.
              </li>
              <li>
                Usability:software should be simple and creative for better user
                experience.
              </li>
              <li>
                Accessibility: Easily connected to the customer when needed have
                a friendly, warm, and competent discussion that makes it easy
                for trust and confidence to develop
              </li>
              <li>
                Stability:More test on the product before delivering for more
                stability of UI and new versions of the technology{" "}
              </li>
              <li>
                Architectability: great coding can never make up for poor
                software design, take the time to get the design right before
                jumping into coding.
              </li>
            </ul>
          </p>
        </p>
        <img className="size" src={about2} alt="" />
      </div>
      <div className="flex">
        <img className="size" src={about3} alt="" />
        <p className="para">
          <h1>Our Vision</h1>
          <p>
            Our vision is to develop in a constant manner and grow as
            a major IT service provider to become a leading performer, in
            providing quality Web and Software Development solutions in the
            competitive global marketplace. Our professional, flexible and
            integrated process reflects in what we do. We always guide our
            customers to success. We have the ability to accelerate and quickly
            share the great work or products of your organization or business.
            ·In the Next year, we would like to earn Global admiration as an IT
            company by delivering eminent development services.
          </p>
        </p>
      </div>
      <div className="spacing"><Slick/> </div>
      
      <Footer/>
    </div>
  );
};

export default About;
