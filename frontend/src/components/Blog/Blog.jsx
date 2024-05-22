import React from "react";
import "./Blog.scss";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="container pt-5 blog pb-5 mb-5">
      <div className="row justify-content-center mt-5 mb-5">
        <div className="col-lg-5 text-center section-heading mb-5">
          <span>BLOG</span>
          <h2>Blog Posts</h2>
        </div>
      </div>
      <div className="row justify-content-between">
        <div className="col-lg-4 col-md-12">
          <img
            src="https://preview.colorlib.com/theme/selling/images/model_1_bg.jpg.webp"
            alt=""
            className="img-fluid mb-3"
          />
          <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit
            quaerat rerum voluptatibus a eius.
          </p>
          <Link to="#">Continue Reading...</Link>
        </div>
        <div className="col-lg-4 col-md-12">
          <img
            src="https://preview.colorlib.com/theme/selling/images/model_1_bg.jpg.webp"
            alt=""
            className="img-fluid mb-3"
          />
          <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit
            quaerat rerum voluptatibus a eius.
          </p>
          <Link to="#">Continue Reading...</Link>
        </div>
        <div className="col-lg-4 col-md-12">
          <img
            src="https://preview.colorlib.com/theme/selling/images/model_1_bg.jpg.webp"
            alt=""
            className="img-fluid mb-3"
          />
          <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit
            quaerat rerum voluptatibus a eius.
          </p>
          <Link to="#">Continue Reading...</Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
