import React from 'react'
import './activity.css'
import { BsArrowRightShort } from 'react-icons/bs'


import farmer_6 from '../../../Assets/farmer_6.jpg';
import farmer_9 from '../../../Assets/farmer_9.jpg';
import farmer_12 from '../../../Assets/farmer_12.jpg';
import farmer_13 from '../../../Assets/farmer_13.jpg';

const Activity = () => {
  return (
    <div className='activitySection'>
      <div className="heading flex">
        <h1>Resent Activity</h1>

        <button className="btn flex">
          See All <BsArrowRightShort className='icon'/>
        </button>
      </div>
      
      <div className="secondContainer grid">

        <div className="singleCustomer flex">
          <img src={farmer_6} alt="Customer" />  
          <div className="customerDetails">
            <span className="name">Lorem, ipsum.</span>
            <small>Lorem ipsum dolor sit.</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={farmer_13} alt="Customer" />  
          <div className="customerDetails">
            <span className="name">Lorem, ipsum.</span>
            <small>Lorem ipsum dolor sit.</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={farmer_12} alt="Customer" />  
          <div className="customerDetails">
            <span className="name">Lorem, ipsum.</span>
            <small>Lorem ipsum dolor sit.</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={farmer_9} alt="Customer" />  
          <div className="customerDetails">
            <span className="name">Lorem, ipsum.</span>
            <small>Lorem ipsum dolor sit.</small>
          </div>

          <div className="duration">
            2 min ago
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activity