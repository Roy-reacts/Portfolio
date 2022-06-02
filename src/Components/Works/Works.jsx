import React from "react";
import "./Work.css";
import Upwork from "../../img/Upwork.png";
import Fiber from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";

const Works = () => {
  return (
    <div className="works">
      <div className="awesome">
        <span>Works For All These</span>
        <span>Brands & Clients</span>
        <span>
          It would nice
          <br />
          to have me
        </span>
        <button className="button s-button"> Hire Me</button>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiber} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </div>
        <div className="w-backcircle blueCircle "></div>
        <div className="w-backcircle yellowCircle "></div>
      </div>
    </div>
  );
};

export default Works;
