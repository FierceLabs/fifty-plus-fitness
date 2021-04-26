import React from 'react'
// import { graphql } from 'gatsby'
// import Img from 'gatsby-image'
import './Promote.css'

const Promote = () => {
  return (
    <div className="promote">
      <div className="promote-image-container" />
      <div className="promote-content">
        <h2 className="promote-title">Maintain Your Health</h2>
        <p>Aging isn't easy. Period.</p>
        <p>
          Becoming aware that our bodies are slowing down and we aren't able to
          do the things we used to do is a difficult realization. However, we
          don't have to just accept this as our new fate. We can decide to make
          a change and take back pour lives. At 50+Fitness, the goal is to
          promote health through fitness so our clients can age more gracefully.
          From strength training to fall prevention, the mission is to get more
          out of life in the decades to come.
        </p>
        <p>
          Get personalized training that is tailored to <strong>YOUR</strong>{' '}
          needs and <strong>YOUR</strong> goals from a qualified, understanding
          specialist.
        </p>
      </div>
    </div>
  )
}

export default Promote
