import React, { useContext, useState } from "react";
import "./Products.scss";
import MainContext from "../../context/context";
import { Link } from "react-router-dom";

const Products = () => {
  const { data, addToBasket } = useContext(MainContext);
  const [inpVal, setInpVal] = useState("");
  const [sortBy, setSortBy] = useState(null);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5 mb-5">
        <div className="col-lg-5 text-center section-heading mb-5">
          <span>Popular Products</span>
          <h2>Our Products</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut
            consequatur laboriosam ipsam.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-10 mb-5">
          <input
            value={inpVal}
            onChange={(e) => {
              setInpVal(e.target.value);
            }}
            type="text"
            placeholder="Search "
          />
          <button
            onClick={() => setSortBy({ field: "title", asc: true })}
            className="btn btn-light mx-3  "
          >
            A-Z
          </button>
          <button
            onClick={() => setSortBy({ field: "title", asc: false })}
            className="btn btn-light mx-3 "
          >
            Z-A
          </button>
          <button
            onClick={() => setSortBy({ field: "price", asc: false })}
            className="btn btn-light"
          >
            Low To High
          </button>
          <button
            onClick={() => setSortBy({ field: "price", asc: true })}
            className="btn btn-light mx-3 "
          >
            High To Low
          </button>
        </div>
      </div>
      <div className="row mb-5">
        {data
          .filter((x) => x.title.toLowerCase().includes(inpVal.toLowerCase()))
          .sort((a, b) => {
            if (!sortBy) {
              return 0;
            } else if (sortBy.asc == true) {
              return a[sortBy.field] > b[sortBy.field]
                ? 1
                : b[sortBy.field] > a[sortBy.field]
                ? -1
                : 0;
            } else if (sortBy.asc == false) {
              return a[sortBy.field] < b[sortBy.field]
                ? 1
                : b[sortBy.field] < a[sortBy.field]
                ? -1
                : 0;
            }
          })
          .map((item) => (
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card" style={{ width: "20rem" }}>
                <img src={item.image} alt="" className="card-img-top" />
                <div className="card-body">
                  <h5>{item.title}</h5>
                  <div className="d-flex justify-content-between">
                    <div className="star">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <div className="heart">
                      <i className="fa-solid fa-heart"></i>
                      <span>29</span>
                    </div>
                  </div>
                  <p className="card-text">{item.price}</p>
                  <div className="card-button d-flex justify-content-between">
                    <Link
                      to="#"
                      className="btn btn-warning"
                      onClick={() => {
                        addToBasket(item._id);
                      }}
                    >
                      Shop
                    </Link>
                    <Link className="btn btn-dark" to={`/detail/${item._id}`}>
                      View
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;
