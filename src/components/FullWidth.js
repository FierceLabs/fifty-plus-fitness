import React from 'react'
import { graphql } from 'gatsby'
// import Img from 'gatsby-image'
import './FullWidth.css'

const FullWidth = () => {
  return (
    <div className="full-width">
      <div className="full-width-content">
        <h2 className="full-width-title">What People Say</h2>
        <p>
          Thank you Jereme for keeping all the COVID protocols for a safe
          environment for our workouts. Don & I have felt very safe at your
          facility.
        </p>
        <p>-Don and Carol</p>
      </div>
      <div className="full-width-image-container" />
    </div>
  )
}

export default FullWidth
