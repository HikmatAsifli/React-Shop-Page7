import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../../../components/Banner/Banner";
import Products from "../../../components/Products/Products";
import Subscribe from "../../../components/Subscribe/Subscribe";
import Featured from "../../../components/Featured/Featured";
import About from "../../../components/About/About";
import Team from "../../../components/Team/Team";
import Summer from "../../../components/Summer/Summer";
import Services from "../../../components/Services/Services";
import Testimonials from "../../../components/Testimonials/Testimonials";
import Blog from "../../../components/Blog/Blog";
import Contact from "../../../components/Contact/Contact";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner />
      <Products />
      <Subscribe />
      <Featured />
      <About />
      <Team />
      <Summer />
      <Services />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
};

export default Home;
