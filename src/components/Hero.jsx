import React from "react";
import hero_img from "../assets/feelingProud.svg";
import { Typewriter } from "react-simple-typewriter";
import my_cv from "../assets/my_cv.pdf";

const Hero = () => {
  return (
    <div className="container" id="hero">
      <div className="row mt-5 align-items-center">
        <div className="col-12 col-md-6 mt-5 mt-md-0">
          <h1>Ayaj Uddin Tanif</h1>
          <h5 className="py-2">
            I'm a{" "}
            <span className="text-primary fw-bold">
              <Typewriter
                words={["Programmer", "Developer", "Designer"]}
                loop={Infinity}
                cursor
                cursorStyle="|"
              />
            </span>
          </h5>
          <p className="pe-0 pe-md-5 lead">
            A passionate developer dedicated to building end-to-end products
            that create sustainable and scalable solutions for both social and
            technical systems.
          </p>
          <a href={my_cv} className="btn common-btn" download>
            Download CV
          </a>
        </div>
        <div className="col-12 col-md-6">
          <img src={hero_img} className="img-fluid" alt="hero image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
