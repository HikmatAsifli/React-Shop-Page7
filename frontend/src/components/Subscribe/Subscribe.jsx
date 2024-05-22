import React from "react";
import "./Subscribe.scss";

const Subscribe = () => {
  return (
    <div className="container-fluid banner pt-5 pb-5 subscribe">
      <div className="row justify-content-center pt-5 pb-5">
        <div className="col-lg-5 col-md-12 ">
          <h4 className="d-flex justify-content-center">
            Get notified on each updates.
          </h4>
          <form action="" className="d-flex justify-content-center">
            <input type="text" placeholder="Enter Your Email Adrress" />
            <button className="btn btn-light btn-1">Subscribe</button>
          </form>
          <p className="d-flex justify-content-center text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            commodi veniam doloremque ducimus tempora.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
