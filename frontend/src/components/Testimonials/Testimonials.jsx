import React from "react";
import "./Testimonials.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container">
      <div className="row justify-content-center mt-5 mb-5">
        <div className="col-lg-5 text-center section-heading mb-5">
          <span>PEOPLE SAYS</span>
          <h2>Testimonials</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="slider-container">
            <Slider {...settings}>
              <div className="d-flex flex-column justify-content-center slide-item">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzsp0VbITvgK5zHKygXFaByH_31gf71_dW2nPv3kkxUw&s"
                  className="img-fluid"
                  alt=""
                />
                <span>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Natus assumenda possimus deserunt! Repellendus accusamus
                  tenetur laudantium harum similique cumque rerum nulla, nobis
                  vitae quibusdam perspiciatis officia culpa delectus, sed quod?
                </span>
                <p>John Doe</p>
              </div>
              <div className="d-flex flex-column justify-content-center slide-item">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzsp0VbITvgK5zHKygXFaByH_31gf71_dW2nPv3kkxUw&s"
                  className="img-fluid"
                  alt=""
                />
                <span>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Natus assumenda possimus deserunt! Repellendus accusamus
                  tenetur laudantium harum similique cumque rerum nulla, nobis
                  vitae quibusdam perspiciatis officia culpa delectus, sed quod?
                </span>
                <p>John Doe</p>
              </div>
              <div className="d-flex flex-column justify-content-center slide-item">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzsp0VbITvgK5zHKygXFaByH_31gf71_dW2nPv3kkxUw&s"
                  className="img-fluid"
                  alt=""
                />
                <span>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Natus assumenda possimus deserunt! Repellendus accusamus
                  tenetur laudantium harum similique cumque rerum nulla, nobis
                  vitae quibusdam perspiciatis officia culpa delectus, sed quod?
                </span>
                <p>John Doe</p>
              </div>
              <div className="d-flex flex-column justify-content-center slide-item">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzsp0VbITvgK5zHKygXFaByH_31gf71_dW2nPv3kkxUw&s"
                  className="img-fluid"
                  alt=""
                />
                <span>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Natus assumenda possimus deserunt! Repellendus accusamus
                  tenetur laudantium harum similique cumque rerum nulla, nobis
                  vitae quibusdam perspiciatis officia culpa delectus, sed quod?
                </span>
                <p>John Doe</p>
              </div>
              <div className="d-flex flex-column justify-content-center slide-item">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzsp0VbITvgK5zHKygXFaByH_31gf71_dW2nPv3kkxUw&s"
                  className="img-fluid"
                  alt=""
                />
                <span>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Natus assumenda possimus deserunt! Repellendus accusamus
                  tenetur laudantium harum similique cumque rerum nulla, nobis
                  vitae quibusdam perspiciatis officia culpa delectus, sed quod?
                </span>
                <p>John Doe</p>
              </div>
              <div className="d-flex flex-column justify-content-center slide-item">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzsp0VbITvgK5zHKygXFaByH_31gf71_dW2nPv3kkxUw&s"
                  className="img-fluid"
                  alt=""
                />
                <span>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Natus assumenda possimus deserunt! Repellendus accusamus
                  tenetur laudantium harum similique cumque rerum nulla, nobis
                  vitae quibusdam perspiciatis officia culpa delectus, sed quod?
                </span>
                <p>John Doe</p>
              </div>
              
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
