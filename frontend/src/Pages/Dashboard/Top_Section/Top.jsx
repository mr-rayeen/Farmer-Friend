import React from "react";
import "./top.css";
import { BiSearchAlt } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import { BsArrowRightShort, BsQuestionCircle } from "react-icons/bs";

import img2 from "../../../Assets/img2.png";
import video from "../../../Assets/Video/video_2.mp4";

const Top = () => {
  return (
    <div className="topSection">
      

      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse,
            laudantium?
          </p>

          <div className="buttons flex">
            <button className="btn">Explore More</button>
            <button className="btn transparent">Top Sellers</button>
          </div>

          <div className="videoDiv">
            <video src={video} autoPlay loop muted></video>
          </div>
        </div>

        <div className="leftCard flex">
          <div className="main flex">
            <div className="textDiv">
              <h1>My Stat</h1>

              <div className="flex">
                <span>
                  Today
                  <br /> <small>4 Orders</small>
                </span>
                <span>
                  This Month
                  <br /> <small>127 Orders</small>
                </span>
              </div>

              <span className="flex link">
                Go to my orders <BsArrowRightShort className="icon" />
              </span>
            </div>

            <div className="imgDiv">
              <img src={img2} alt="Image" style={{width:'175px'}} />
            </div>

          </div>
          
          <div className="sideBarCard">
              <BsQuestionCircle className="icon" />

              <div className="cardContent">
                <div className="circle1"></div>
                <div className="circle2"></div>

                <h3>Help Center</h3>
                <p>
                  Having trouble in FarmerFriends , please contact us from for
                  more questions.{" "}
                </p>
                <button className="btn">Go to help center</button>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Top;