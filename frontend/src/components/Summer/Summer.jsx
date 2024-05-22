import React from 'react'
import { Link } from 'react-router-dom'
import "./Summer.scss"

const Summer = () => {
  return (
    <div className="container-fluid banner summer mt-5 mb-5">
      <div className="container px-5 py-5">
        <div className="row px-5 py-5 mt-5 mb-5 justify-content-center">
          <div className="col-lg-5 col-md-12 px-5 py-5 mt-5 mb-5 ">
            <span>SPECIAL PROMO</span>
            <h4 className="pt-5">Summer Sale</h4>
            <p className="pb-5 ">
            Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.
            </p>
            <div className='boxs d-flex justify-content-between'>
                <div className="box col-lg-2 col-md-12">
                    00
                    <br />
                    weeks
                </div>
                <div className="box col-lg-2 col-md-12">
                    00
                    <br />
                    days
                </div>
                <div className="box col-lg-2 col-md-12">
                    00
                    <br />
                    hr
                </div>
                <div className="box col-lg-2 col-md-12">
                    00
                    <br />
                    min
                </div>
                <div className="box col-lg-2 col-md-12">
                    00
                    <br />
                    sec
                </div>
            </div>
            <br />
            <Link to="#" className="btn btn-primary btn-1">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Summer
