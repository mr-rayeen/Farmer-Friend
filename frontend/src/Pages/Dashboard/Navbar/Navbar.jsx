import React from "react";
import "../Top_Section/top.css";
import { BiSearchAlt } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
const Navbar = () => {
  return (
    <div className="topSection" style={{width:'90%'}}>
          <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to Farmer-Friends</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="searchBar flex">
          <input type="text" placeholder="Search" />
          <BiSearchAlt className="icon" />
        </div>
        <div className="adminDiv flex">
          <TbMessageCircle className="icon" />
          <MdOutlineNotificationsNone className="icon" />
          <div className="adminImage">
            {/* <img src="" alt="Admin Image" /> */}
            <RiAdminLine className="icon" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar