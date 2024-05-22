import React from "react";
import "./Services.scss";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="container services">
      <div className="row justify-content-center mt-5 mb-5">
        <div className="col-lg-5 text-center section-heading mb-5">
          <span>OUR SERVICES</span>
          <h2>We Offer Services</h2>
        </div>
      </div>
      <div className="row justify-content-between">
        <div className="col-lg-4 col-md-12 d-flex gap-4 mt-5 mb-5">
          <i className="fa-solid fa-delete-left"></i>
          <div>
            <h6>Business Consulting</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quis molestiae vitae eligendi at.
            </p>
            <Link to="#">Learn More</Link>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 d-flex gap-4 mt-5 mb-5">
          <i className="fa-solid fa-delete-left"></i>
          <div>
            <h6>Business Consulting</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quis molestiae vitae eligendi at.
            </p>
            <Link to="#">Learn More</Link>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 d-flex gap-4 mt-5 mb-5">
          <i className="fa-solid fa-delete-left"></i>
          <div>
            <h6>Business Consulting</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quis molestiae vitae eligendi at.
            </p>
            <Link to="#">Learn More</Link>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 d-flex gap-4 mt-5 mb-5">
          <i className="fa-solid fa-delete-left"></i>
          <div>
            <h6>Business Consulting</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quis molestiae vitae eligendi at.
            </p>
            <Link to="#">Learn More</Link>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 d-flex gap-4 mt-5 mb-5">
          <i className="fa-solid fa-delete-left"></i>
          <div>
            <h6>Business Consulting</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quis molestiae vitae eligendi at.
            </p>
            <Link to="#">Learn More</Link>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 d-flex gap-4 mt-5 mb-5">
          <i className="fa-solid fa-delete-left"></i>
          <div>
            <h6>Business Consulting</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quis molestiae vitae eligendi at.
            </p>
            <Link to="#">Learn More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
