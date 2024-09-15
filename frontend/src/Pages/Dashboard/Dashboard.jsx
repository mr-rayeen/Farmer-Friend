import React from 'react'
import './body.css'
import '../../app.css';

import Top from './Top_Section/Top'
import Listing from './Listing_Section/Listing'
import Activity from './Activity_Section/Activity'


const Body = () => {
  return (
    <div className='mainContent'>
      <Top/>

      <div className='bottom flex' style={{width:'95%'}}>
        <Listing/>
        <Activity/>
      </div>
    </div>
  )
}

export default Body