import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";
import backImg from "../../../images/back2.jpg";
const Hero = () => {
  return (
    <>
      <section className="">
        <div className="">
          <div className="hero">
            <Heading
              subtitle="WELCOME TO GICS"
              title="Best Consultancy Education Hub"
            />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui</p>
            <p>
              consectetur fuga itaque ut illo quam quos minima omnis amet in.
            </p>
            <div className="hero-btn">
              <div className="button">
                <button className="left-btn primary-btn">
                  <a href="www.sabifi.io">
                    GET STARTED NOW{" "}
                    <i className="fa fa-long-arrow-alt-right"></i>
                  </a>
                </button>
                <button className="right-btn">
                  VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="hero-img">
            <img src={backImg} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
