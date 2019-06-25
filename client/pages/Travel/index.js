import React, { Component } from 'react'
import TravelPhoto from '../../components/TravelPhoto'
import './index.scss'

const Travel = () => {

  let tryDictionary = {
    photoLink: "img/photo1Landscape.JPG",
    locationName: "hi"
  }

  return (
   <div>
     <div className="travelPhotoContainer">
       <div className="travelPhoto">
        <TravelPhoto
          travelPhotoDetails={tryDictionary} />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
       </div>
     </div>
   </div>
  )
}

export default Travel;
