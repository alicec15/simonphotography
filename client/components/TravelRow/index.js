import React, { Component } from 'react'
import TravelPhoto from '../TravelPhoto'
import './index.scss'

const TravelRow = ({ travelDictionary }) => {

  // let tryDictionary = {
  //   photoLink: "img/photo1Landscape.JPG",
  //   locationName: "HORSESHOE BEND",
  //   location: "Arizona, NV"
  // }

  return (
   <div>
     <div className="travelPhotoContainer">
       <span className="border"></span>
       <div className="travelPhoto">
        <TravelPhoto
          travelPhotoDetails={ travelDictionary[0] } />
        <p className="travelDescription">{ travelDictionary[0].description }</p>
       </div>
       <span className="border"></span>
       <div className="travelPhoto">
        <p className="travelDescription">{ travelDictionary[1].description }</p>
        <TravelPhoto
          travelPhotoDetails={ travelDictionary[1] } />
       </div>
     </div>
   </div>
  )
}

export default TravelRow;
