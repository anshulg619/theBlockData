import React, {useState} from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import UserServices from "../services/UserServices";
import Success from "./Success";

const Contact = () => {


  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [flag, setFlag] = useState(false);

  const handleClick = (e) =>{
    e.preventDefault()

    console.log("inside handle click")
    const messageBody = {
      name,
      number,
      email,
      message
    }

    UserServices.sendMessage(messageBody)
    .then((response) => {
      console.log(response.data);
      setFlag(true);
      setName("");
      setNumber("");
      setEmail("");
      setMessage("");
    }).catch((error) => {console.log("error:" + error.message )})
  }



  return (
    <div>
      <div className="img-top">
          <h1>Contact Us</h1>
          <span className="back-color"><Link to="/" className="link">Home</Link>/Contact</span>
      </div>
      <div className="flex">
        <form className="col-md-8" onSubmit = {handleClick}>
          <h4>Send us a message</h4>
          {flag ? (
              <span>
                <Success message={"message sent Successfully."} />
              </span>
            ):("")}
          <div class="mb-3">
            <input type="text" class="form-control" placeholder="Full Name" value ={name}
            onChange = {(e) => {setName(e.target.value)}}
            />
          </div>
          <div class="mb-3">
            <input
              type="number"
              class="form-control"
              placeholder="Contact No."
              value ={number}
              onChange = {(e) => {setNumber(e.target.value)}}
            />
          </div>
          <div class="mb-3">
            <input
              type="Email"
              class="form-control"
              placeholder="Email Address"
              value ={email}
              onChange = {(e) => {setEmail(e.target.value)}}
            />
          </div>
          <div className="mb-3">
            <textarea className="form-control" placeholder="Message"
            value ={message} 
            onChange = {(e) => {setMessage(e.target.value)}}
            />
          </div>
          <button type="submit" className="btn btn-primary" >
            Send Message
          </button>
        </form>
        <p className="para">
          <h5>Contact Details</h5>
          <p>
            209 Freinds Colony, Tekadi Road, Kanhan,
            <br />
            Nagpur Maharashtra-441401.
          </p>
          <a className="link" href="mailto:info@blockdata.in">
            E:info@blockdata.in
          </a>
          <br />
          P:7385269415
          <br />
          H: Monday-Friday from 10.00 AM - 6.00 PM
        </p>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
