import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-8">
          <img
            src="https://preview.colorlib.com/theme/selling/images/about_1.jpg.webp"
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="col-lg-3 d-flex flex-column align-items-center">
          <p>MERCHANT COMPANY</p>
          <h4>About Us</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui fuga
            ipsa, repellat blanditiis nihil, consectetur. Consequuntur eum
            inventore, rem maxime, nisi excepturi ipsam libero ratione adipisci
            alias eius vero vel!
          </p>
          <button className="btn btn-dark">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
