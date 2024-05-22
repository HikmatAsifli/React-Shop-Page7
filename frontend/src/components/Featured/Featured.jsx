import React from "react";
import "./Featured.scss";

const Featured = () => {
  return (
    <div className="container featured">
      <div className="row justify-content-center mt-5 mb-5">
        <div className="col-lg-5 text-center section-heading mb-5">
          <span>AWESOME PRODUCTS</span>
          <h2>Featured Products</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut
            consequatur laboriosam ipsam.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 mb-5">
          <div className="row justify-content-between">
            <div className="col-lg-4 col-md-12">
              <img
                className="img-fluid"
                src="https://preview.colorlib.com/theme/selling/images/model_1_bg.jpg.webp"
                alt=""
              />
            </div>
            <div className="col-lg-7 col-md-12 feat-right">
              <h4>About This Product</h4>
              <p>
                Et tempora id nostrum saepe amet doloribus deserunt totam
                officiis cupiditate asperiores quasi accusantium voluptatum
                dolorem quae sapiente voluptatem ratione odio iure blanditiis
                earum fuga molestiae alias dicta perferendis inventore!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ducimus soluta assumenda sed optio, error at?
              </p>
              <h3>Price:</h3>
              <span>
                $269.00 <span>$69.00</span>
              </span>
              <br />
              <button className="btn btn-dark">View Details</button>
              <button className="btn btn-dark">Add To Cart</button>
            </div>
          </div>
        </div>
        <div className="col-md-12 mb-5">
          <div className="row justify-content-between">
            
            <div className="col-lg-7 col-md-12 feat-right">
              <h4>About This Product</h4>
              <p>
                Et tempora id nostrum saepe amet doloribus deserunt totam
                officiis cupiditate asperiores quasi accusantium voluptatum
                dolorem quae sapiente voluptatem ratione odio iure blanditiis
                earum fuga molestiae alias dicta perferendis inventore!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ducimus soluta assumenda sed optio, error at?
              </p>
              <h3>Price:</h3>
              <span>
                $269.00 <span>$69.00</span>
              </span>
              <br />
              <button className="btn btn-dark">View Details</button>
              <button className="btn btn-dark">Add To Cart</button>
            </div>
            <div className="col-lg-4 col-md-12">
              <img
                className="img-fluid"
                src="https://preview.colorlib.com/theme/selling/images/model_1_bg.jpg.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
