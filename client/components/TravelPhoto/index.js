import React from 'react'
import './index.scss'

const TravelPhoto = ({ travelPhotoDetails }) => {
  
  return (
    <div className='containerTravel'>
      
      <div className='pictureTravel'>
        <img src={ travelPhotoDetails.photoLink } />   
      </div>
      <div className='infoTravel'>
        <h2>{ travelPhotoDetails.locationName }</h2>
        <p>{ travelPhotoDetails.location }</p>
      </div>

    </div>

  )
}

export default TravelPhoto;
