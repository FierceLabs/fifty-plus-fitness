import React from 'react'
// import { graphql } from 'gatsby'
// import Img from 'gatsby-image'
import './Services.css'

const Services = () => {
  return (
    <div className="services">
      <div className="services-content">
        <h2 className="services-title">Our Services</h2>
        <p className="disclaimer">
          At 50+Fitness, we work on building strength and flexibility. This
          in turn helps with balance and overall mobility. Also, studies have
          shown that regular fitness training can help with a wide range of
          common issues with aging, including osteoporosis, high blood pressure,
          and type 2 diabetes.
        </p>
        <div className="services-grid">
          <div className="img">
            <div className="img-1" />
            <h3 className="item-text">Weightloss</h3>
          </div>
          <div className="img">
            <div className="img-2" />
            <h3 className="item-text">Strength Training</h3>
          </div>
          <div className="img">
            <div className="img-3" />
            <h3 className="item-text">Flexibility Training</h3>
          </div>
          <div className="img">
            <div className="img-4" />
            <h3 className="item-text">Joint Pain</h3>
          </div>
          <div className="img">
            <div className="img-5" />
            <h3 className="item-text">Balance/Fall Prevention</h3>
          </div>
          <div className="img">
            <div className="img-6" />
            <h3 className="item-text">Type 2 Diabetes</h3>
          </div>
          <div className="img">
            <div className="img-7" />
            <h3 className="item-text">High Blood Pressure</h3>
          </div>
          <div className="img">
            <div className="img-8" />
            <h3 className="item-text">High Cholesterol</h3>
          </div>
          <div className="img">
            <div className="img-9" />
            <h3 className="item-text">Osteoporosis</h3>
          </div>
          <div className="img">
            <div className="img-10" />
            <h3 className="item-text">Pre/Post Op Excercise</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
