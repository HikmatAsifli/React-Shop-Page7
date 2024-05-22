import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss"

const Header = () => {
  return (
    <div className="container">
      <header class="d-flex flex-wrap justify-content-center py-3 mb-4">
        <Link
          to="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <h1>Selling
            <span>.</span>
          </h1>
        </Link>

        <ul class="nav nav-pills align-items-center">
          <li class="nav-item">
            <Link to="/" class="nav-link active">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/basket" class="nav-link">
              Basket
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/admin" class="nav-link">
              Products
            </Link>
          </li>
          <li class="nav-item">
            <Link to="#" class="nav-link">
              About Us
            </Link>
          </li>
          <li class="nav-item">
            <Link to="#" class="nav-link">
              Special
            </Link>
          </li>
          <li class="nav-item">
            <Link to="#" class="nav-link">
              Testimonials
            </Link>
          </li>
          <li class="nav-item">
            <Link to="#" class="nav-link">
              Blog
            </Link>
          </li>
          <li class="nav-item">
            <Link to="#" class="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
