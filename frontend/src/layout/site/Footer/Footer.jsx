import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="container mt-5 mb-5 pt-5 pb-5 ">
        <div className="row justify-content-between">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h6>ABOUT US</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              facere laudantium magnam voluptatum autem. Amet aliquid nesciunt
              veritatis aliquam.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h6>QUICK LINKS</h6>
            <ul className="nav flex-column">
              <li className="nav-items mb-2">
                <Link to="#">About Us</Link>
              </li>
              <li className="nav-items mb-2">
                <Link to="#">Services</Link>
              </li>
              <li className="nav-items mb-2">
                <Link to="#">Testimonials</Link>
              </li>
              <li className="nav-items mb-2">
                <Link to="#">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h6>FOLLOW US</h6>
            <ul className="nav gap-4">
              <li className="nav-items mb-2">
                <Link to="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </Link>
              </li>
              <li className="nav-items mb-2">
                <Link to="#">
                  <i className="fa-brands fa-twitter"></i>
                </Link>
              </li>
              <li className="nav-items mb-2">
                <Link to="#">
                  <i className="fa-brands fa-instagram"></i>
                </Link>
              </li>
              <li className="nav-items mb-2">
                <Link to="#">
                  <i className="fa-brands fa-linkedin"></i>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h6>FEATURED PRODUCT</h6>
            <img
              className="img-fluid"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZPeayZL-3J0fhzQItereY-OhjfrZF8w6Bh7J71R2L8Q&s"
              alt=""
            />
            <p className="mt-2">Leather Brown Shoe</p>
            <span>$60.00</span>
            <br />
            <br />
            <button className="btn btn-dark">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
