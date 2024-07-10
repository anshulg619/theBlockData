import React, { useState, useEffect } from "react";
import UserServices from "../services/UserServices";

const Faq = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    UserServices.getFaq()
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <div class="accordion" id="accordionExample">
      {
       data.map( (faq) => (
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              {faq.question}
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
};

export default Faq;
