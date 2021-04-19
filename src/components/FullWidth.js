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
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures
        </p>
      </div>
      <div className="full-width-image-container" />
    </div>
  )
}

export default FullWidth