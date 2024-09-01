import React from 'react';
import './App.css'
import Sidebar from './Components/Sidebar_Section/Sidebar'
import Body from './Components/Body_Section/Body'


const App = () => {
  return (
    <div className='container'>
      <Sidebar/>
      <Body/>
    </div>
  )
}

export default App