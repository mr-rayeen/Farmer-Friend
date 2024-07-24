import React from 'react'
import './listing.css'
import { BsArrowRightShort } from 'react-icons/bs'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

import Apple from '../../../Assets/apple.jpg';
import orange from '../../../Assets/orange.jpg';
import grapes from '../../../Assets/grapes.jpg';
import strawberry from '../../../Assets/strawberry.jpg';
import wheat from '../../../Assets/wheat.jpg';
import corn from '../../../Assets/corn.jpg';
import rice from '../../../Assets/rice.jpg';
import peanuts from '../../../Assets/peanuts.jpg';

import farmer_6 from '../../../Assets/farmer_6.jpg';
import farmer_9 from '../../../Assets/farmer_9.jpg';
import farmer_12 from '../../../Assets/farmer_12.jpg';
import farmer_13 from '../../../Assets/farmer_13.jpg';

const Listing = () => {
  return (
    <div className='listingSection'>

      <div className="heading flex">
        <h1>My Listings</h1>
        <button className="btn flex">
          See All <BsArrowRightShort className='icon'/>
        </button>
      </div>

      <div className="secondContainer flex">

        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={Apple} alt="Image" />
          <h3>Apple</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className='icon'/>
          
          <img src={orange} alt="Image" />
          <h3>Orange</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className='icon'/>
          <img src={grapes} alt="Image" />
          <h3>Grapes</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className='icon'/>
          <img src={strawberry} alt="Image" />
          <h3>Strawberry</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className='icon'/>
          <img src={wheat} alt="Image" />
          <h3>Wheat</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className='icon'/>
          <img src={corn} alt="Image" />
          <h3>Corn</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className='icon'/>
          <img src={rice} alt="Image" />
          <h3>Rice</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className='icon'/>
          <img src={peanuts} alt="Image" />
          <h3>Peanuts</h3>
        </div>
      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className='icon'/>
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={farmer_6} alt="User" />
              <img src={farmer_9} alt="User" />
              <img src={farmer_12} alt="User" />
              <img src={farmer_13} alt="User" />
            </div>

            <div className="cardText">
              <span>
                14000 kg Crops sold<br/>
                <small>
                  21 Sellers <span className="date">7 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>

        
        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Featured Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className='icon'/>
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={farmer_12} alt="User" />
              <img src={farmer_6} alt="User" />
              <img src={farmer_13} alt="User" />
              <img src={farmer_9} alt="User" />
            </div>

            <div className="cardText">
              <span>
                42000 kg Crops sold<br/>
                <small>
                  27 Sellers <span className="date">31 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Listing