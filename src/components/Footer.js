import React from 'react'
import './Footer.css'

export default () => (
  <div>
    {/* <h2 className="taCenter">
      Follow us{' '}
      <a href="https://instagram.com/thrivegoldcoast/">@thrivegoldcoast</a>
    </h2>
    <br /> */}
    <footer className="footer">
      <div className="container taCenter">
        <div className="content">
          <div className="title">
            <span className="company-name">50+Fitness</span>
            <br />
            <div className="logo-footer" />
          </div>
          <div className="info">
            <div className="address-container">
              <span className="address consul">Schedule a Consultation</span>
              <span className="address">
                <a href="tel:2085467001">208-546-7001</a>
              </span>
              <br />
              <span className="address consul">Located at:</span>
              <span className="address">314 12th Ave S.</span>
              <span className="address"> Nampa, ID 83651</span>
              <br />
            </div>
          </div>
        </div>
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by
          Fierce Island.
        </span>
      </div>
    </footer>
  </div>
)
