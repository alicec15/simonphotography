import React, { Component } from 'react'
import TravelRow from '../../components/TravelRow'
import './index.scss'
const content = require('./content.json')

const Travel = () => {

  const travelDic = content.travelInformation

  return (
    <div>
      <p className="travelName">Travel</p>
      <TravelRow travelDictionary={ travelDic }/>
    </div>
)
}

export default Travel;
