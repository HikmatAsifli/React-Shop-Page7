import React from "react";
import { Link } from "react-router-dom";
import "./Team.scss"

const Team = () => {
  return (
    <div className="container team">
      <div className="row justify-content-center mt-5 mb-5">
        <div className="col-lg-5 text-center section-heading mb-5">
          <span>TEAM</span>
          <h2>Leadership</h2>
        </div>
      </div>
      <div className="row justify-content-between">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <img
          style={{width: "250px"}}
            src="https://preview.colorlib.com/theme/selling/images/person_2.jpg.webp"
            alt=""
          />
          <h6>John Rooster</h6>
          <span>CO-FOUNDER, PRESIDENT</span>
          <p>
            Nisi at consequatur unde molestiae quidem provident voluptatum
            deleniti quo iste error eos est praesentium distinctio cupiditate
            tempore suscipit inventore deserunt tenetur.
          </p>
          <ul className="nav">
            <li className="nav-item">
                <Link className="nav-link" to="#"><i className="fa-brands fa-facebook"></i></Link>
            </li>
            <li>
                <Link className="nav-link" to="#"><i className="fa-brands fa-twitter"></i></Link>
            </li>
            <li>
                <Link className="nav-link" to="#"><i className="fa-brands fa-linkedin"></i></Link>
            </li>
            <li>
                <Link className="nav-link" to="#"><i className="fa-brands fa-instagram"></i></Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <img
          style={{width: "250px"}}
            src="https://preview.colorlib.com/theme/selling/images/person_2.jpg.webp"
            alt=""
          />
          <h6>John Rooster</h6>
          <span>CO-FOUNDER, PRESIDENT</span>
          <p>
            Nisi at consequatur unde molestiae quidem provident voluptatum
            deleniti quo iste error eos est praesentium distinctio cupiditate
            tempore suscipit inventore deserunt tenetur.
          </p>
          <ul className="nav">
            <li className="nav-item">
                <Link className="nav-link" to="#"><i className="fa-brands fa-facebook"></i></Link>
            </li>
            <li>
                <Link className="nav-link" to="#"><i className="fa-brands fa-twitter"></i></Link>
            </li>
            <li>
                <Link className="nav-link" to="#"><i className="fa-brands fa-linkedin"></i></Link>
            </li>
            <li>
                <Link className="nav-link" to="#"><i className="fa-brands fa-instagram"></i></Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <img
          style={{width: "250px"}}
            src="https://preview.colorlib.com/theme/selling/images/person_2.jpg.webp"
            alt=""
          />
          <h6>John Rooster</h6>
          <span>CO-FOUNDER, PRESIDENT</span>
          <p>
            Nisi at consequatur unde molestiae quidem provident voluptatum
            deleniti quo iste error eos est praesentium distinctio cupiditate
            tempore suscipit inventore deserunt tenetur.
          </p>
          <ul className="nav">
            <li className="nav-item">
                <Link className="nav-link" to="#"><i className="fa-brands fa-facebook"></i></Link>
            </li>
            <li>
                <Link className="nav-link" to="#"><i className="fa-brands fa-twitter"></i></Link>
            </li>
            <li>
                <Link className="nav-link" to="#"><i className="fa-brands fa-linkedin"></i></Link>
            </li>
            <li>
                <Link className="nav-link" to="#"><i className="fa-brands fa-instagram"></i></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Team;
