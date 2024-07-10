import React, {useState} from "react";
import Footer from "./Footer";
import {Link} from "react-router-dom";
import UserServices from "../services/UserServices"

const Qoute = () => {

    const [formData, setFormData] = useState({
      fullName: '',
    phoneNumber: '',
    email: '',
    address: '',    
    companyName: '',
    attachedFile: null,
    checkboxes:[],
    projectDetails: '',
    referenceWebsite: ''
    })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("inside handlesubmit")
    const qouteData = {
      fullName: formData.fullName,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      address: formData.address,
      companyName: formData.companyName,
      attachedFile: formData.attachedFile,
      checkboxes: formData.checkboxes,
      projectDetails: formData.projectDetails,
      referenceWebsite: formData.referenceWebsite
    }

    UserServices.saveQoute(qouteData)
    .then((response) => {
      console.log(response.data);
      setFormData({
        fullName: '',
        phoneNumber: '',
        email: '',
        address: '',    
        companyName: '',
        attachedFile: null,
        checkboxes:[],
        projectDetails: '',
        refrenceWebsite: ''
    });
    }).catch((error) => {console.log("error:" + error.message )})

  }

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      attachedFile: e.target.files[0]
    }));
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log(e.target.name)
    console.log(e.target.value)
    if (type === 'checkbox') {
      if (checked) {
        setFormData((prevData) => ({
          ...prevData,
          checkboxes: [...prevData.checkboxes, value]
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          checkboxes: prevData.checkboxes.filter((checkbox) => checkbox !== value)
        }));
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };


  return (
    <div>
      <div className="img-top ">
        <h1>Qoute</h1>
        <span className="back-color"><Link to="/" className="link">Home</Link>/Qoute</span>
      </div>
      <form className="spacing" onSubmit =  {handleSubmit}>
        <h1>Tell Us About You & Your Project</h1>
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col">
            <label for="name" className="form-label ">
              Name
            </label>
            <input
              type="text"
              id="name"
              name = "fullName"
              className="form-control"
              value={formData.fullName}
              onChange = {handleInputChange}
              placeholder="Full name"
              aria-label="Full name"
              required
            />
          </div>
          <div className="col">
            <label for="phonenumber" className="form-label">
              Phone Number
            </label>
            <input
              type="text"
              className="form-control"
              id="phonenumber"
              name = "phoneNumber"
              value={formData.phoneNumber}
              onChange = {handleInputChange}
              required
            />
          </div>
          <div className="col">
            <label for="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="E-mail"
              aria-label="email"
              value={formData.email}
              onChange = {handleInputChange}
              required
            />
          </div>
          <div className="col">
            <label for="address" className="form-label">
              Your Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="form-control"
              placeholder="Address"
              aria-label="Address"
              value={formData.address}
              onChange = {handleInputChange}
              required
            />
          </div>
          <div className="col">
            <label for="companyName" className="form-label">
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              className="form-control"
              placeholder="Company name"
              aria-label="Company name"
              value={formData.companyName}
              onChange = {handleInputChange}
            />
          </div>
          <div className="col">
            <label for="chooseFile" className="form-label">
              Attach any file you feel would be useful
            </label>
            <input class="form-control" 
            type="file" 
            id="chooseFile"
            name="attachedFile"
            onChange = {handleFileChange}
            />
          </div>
        </div>

        <h1>What You are looking for?</h1>
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="Web Development"
                name = "checkboxes"
                onChange = {handleInputChange}
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Web Development
                <br />
                (PHP, AMP, Custom etc.)
              </label>
            </div>
          </div>
          <div className="col">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="mobile apps"
                name = "checkboxes"
                onChange = {handleInputChange}
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Mobile Apps
                <br />
                (iOS, Android, Cross-Platform etc.)
              </label>
            </div>
          </div>
          <div className="col">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="Ecommerce Development"
                name = "checkboxes"
                onChange = {handleInputChange}
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Ecommerce Development
                <br />
                (B2C/B2B, Magento, Shopify, Core PHP etc.)
              </label>
            </div>
          </div>
          <div className="col">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="internet marketing"
                name = "checkboxes"
                onChange = {handleInputChange}
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Internet Marketing
                <br />
                (SEO, PPC, SMO, Emails etc.)
              </label>
            </div>
          </div>
          <div className="col">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="ui/ux development"
                name = "checkboxes"
                onChange = {handleInputChange}
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                UI/UX Development
                <br />
                (Research, Wire-framing, A/B testing etc.)
              </label>
            </div>
          </div>
          <div className="col">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="performance improvement"
                name = "checkboxes"
                onChange = {handleInputChange}
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                <span>Performance Improvement</span>
                <br />
                <span>(Speed, Conversion, Security etc.)</span>
              </label>
            </div>
          </div>
          <div className="col">
            <div class="mb-3">
              <label for="Textarea1" class="form-label">
                Tell us About your project
              </label>
              <textarea
                class="form-control"
                id="Textarea1"
                name="projectDetails"
                rows="3"
                placeholder = "Project Details"
                value = {formData.projectDetails}
                onChange = {handleInputChange}
              ></textarea>
            </div>
          </div>
          <div className="col">
            <div class="mb-3">
              <label for="Textarea2" className="form-label">
                Referral Website or App
              </label>
              <textarea
                className="form-control"
                id="Textarea2"
                name = "referenceWebsite"
                rows="3"
                placeholder ="Reference Website"
                value = {formData.referenceWebsite}
                onChange = {handleInputChange}
              ></textarea>
            </div>
          </div>
        </div>
        <button type="Submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Qoute;
