import React, { useState, useEffect } from "react";
import UserServices from "../services/UserServices.js";

const Accordion = () => {
  const [data, setData] = useState([]);
  const [jobs, setJobs] = useState({}); 
  const [formData,setFormData] = useState({
    position:"",
    name:"",
    email:"",
    mobile:"",
    basicInfo:"",
    resume: null
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    const formBody = {
      position:formData.position,
      name:formData.name,
      email:formData.email,
      mobile:formData.mobile,
      basicInfo:formData.basicInfo,
      resume: formData.resume
    }

    UserServices.saveCandidate(formBody)
    .then((response) => {
      console.log(response.data)
      setFormData({
      position:"",
      name:"",
      email:"",
      mobile:"",
      basicInfo:"",
      resume: null
      })})
      .catch((error) =>{
        console.log("error"+error)})
  }

  const handleChange = (e) => {
    const {name, value} =e.target;

    setFormData((prevdata) => ({
      ...prevdata,
      [name]:value
    }) 
    )
  }

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      resume: e.target.files[0]
    }));
  };


  const handleClick = (job) => {
    setJobs(job);
  };

  useEffect(() => {
    UserServices.getJobPosts()
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div className="flex">
      <div className="accordion col-md-8" id="jobAccordion">
        {data.map((job) => (
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                {job.title}
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body para">
                <span>Job-Location:{job.location}</span>
                <br />
                <span>Qualification:{job.qualification}</span>
                <br />
                <span>Experience:{job.experience}</span>
                <br />
                <p>Description:{job.description}</p>
                <br />
                <p>Key-Skills:{job.keySkills}</p>
              </div>
              <button type="" className="btn btn-primary" onClick = {()=>handleClick(job.title)}>
                Apply
              </button>
            </div>
          </div>
        ))}
      </div>
      <form className="para" onSubmit = { handleSubmit}>
        <label for="position" className="form-label">
          Position
        </label>
        <select
          class="form-select"
          id="position"
          name="position"
          aria-label="Default select example"
          value={formData.position}
          onChange = {handleChange}
                  >
            <option value="" selected>--Select job Title--</option>
          
          {data.map((pos) => (
            
            <option value={pos.title}>{pos.title}</option>
          ))}
        </select>
        <label for="name" className="form-label">
          Name
        </label>
        <input type="text" name="name" className="form-control" id="name" value={formData.name} onChange = {handleChange} required />
        <label for="email" className="form-label">
          Email
        </label>
        <input type="email" name="email" className="form-control" id="email" required value={formData.email} onChange = {handleChange}/>
        <label for="mobile" className="form-label">
          Mobile Number
        </label>
        <input type="text" name ="mobile" className="form-control" id="mobile" required value={formData.mobile} onChange = {handleChange}/>
        <label for="basic" className="form-label">
          Basic Information
        </label>
        <textarea type="text" name = "basicInfo" className="form-control" id="basic" required value={formData.basicInfo} onChange = {handleChange}/>
        <label for="resume" className="form-label">
          Submit Your CV
        </label>
        <input type="file" name="resume" className="form-control" id="resume" required onChange = {handleFileChange}/>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Accordion;
