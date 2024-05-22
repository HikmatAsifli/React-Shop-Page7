import React from "react";
import { Link } from "react-router-dom";
import "./Banner.scss";

const Banner = () => {
  return (
    <div className="container-fluid banner">
      <div className="container px-5 py-5">
        <div className="row px-5 py-5 mt-5 mb-5">
          <div className="col-lg-6 col-md-12 px-5 py-5 mt-5 mb-5">
            <h1 className="pt-5">Shop With Us</h1>
            <p className="pb-5 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam assumenda ea quo cupiditate facere deleniti fuga
              officia.
            </p>
            <Link to="#" className="btn btn-primary btn-1">
              Shop Now
            </Link>
            <Link to="#" className="btn btn-primary btn-2">
              Club Membership
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
