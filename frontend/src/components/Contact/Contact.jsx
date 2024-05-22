import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="container contact">
      <div className="row justify-content-center mt-5 mb-5">
        <div className="col-lg-5 text-center section-heading mb-5">
          <span>CONTACT FORM</span>
          <h2>Get In Touch</h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-12">
          <form action="">
            <h2>Contact Form</h2>
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" />
            <label htmlFor="sname">Last Name</label>
            <input type="text" id="sname" />
            <br />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
            <br />
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" />
            <br />
            <label htmlFor="msg">Message</label>
            <input type="text" id="msg" />
            <br />
            <button className="btn btn-dark" type="sumbit">Sumbit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
